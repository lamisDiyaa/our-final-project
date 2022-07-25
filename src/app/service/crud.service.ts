import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Router, RouterEvent, RouterLink } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import{map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  ResturantImg?:[];

  constructor(public fireservices:AngularFirestore) { }

  creatNewResturant(Record:any){

return this.fireservices.collection('Resturant').add(Record)
  }


// getAllGoods(){
// return this.fireservice.collection('goods').valueChanges();
// }

getRestrants(): Observable<any[]> {
  return  this.fireservices.collection('Resturant').snapshotChanges()

 }

 getRestrantsID(id:any) {
  return  this.fireservices.doc(`Resturant/${id}`).snapshotChanges();
 }

 delete(id:any){
  return  this.fireservices.doc(`Resturant/${id}`).delete();
}

deleteMeal1(resID:any , index:any){
  return this.fireservices.doc(`Resturant/${resID}`).set({'meals':
  {[index]:index.delete() }}, {merge: true})
}

deleteMeal(id:any , index:any){
  return this.fireservices.collection("Resturant").doc(`${id}`).set({'meals':
  {[index]:index.delete() }}, {merge: true});
}





update_Restrant(resid:any,resdata:any){
  return  this.fireservices.doc('Resturant/'+resid).update(resdata)
}

updateItem(item: any){
return this.fireservices.doc(`items/${item.id}`).update(item);
}

//  getImages() {
//   return this.http.get<{[key: string]: any}>('https://angularimageupload-3f681.firebaseio.com/.json').pipe( map (responseData => {
//     const albumArray: RestrantImg[]=[]
//     for(const key in responseData) {
//       if(responseData.hasOwnProperty(key)) {
//         albumArray.push({ ...responseData[key], id: key })
//       }
//     }
//     return albumArray;

//   }))
// }

}

