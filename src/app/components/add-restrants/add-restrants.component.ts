import { Component } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from 'src/app/service/crud.service';
import { finalize, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-restrants',
  templateUrl: './add-restrants.component.html',
  styleUrls: ['./add-restrants.component.css']
})
export class AddRestrantsComponent  {

  title = 'talabat';
  filePath?:any


  usrFormGroup: FormGroup;
  Resturant :any
  ResturantImg:any
  xfile:any
  _crudservices : any;
  meals:any

  constructor( crudservices:CrudService ,private fb: FormBuilder, private afStorage:AngularFireStorage, private router:Router){
    this._crudservices=crudservices;
    this.usrFormGroup=this.fb.group({
      ResturantName:['', [Validators.required,Validators.minLength(7)]],
      ResturantAddress:['',[ Validators.required,Validators.minLength(6)]],
      ResturantImg:[''],

      meals: new FormArray([]), //fb.array([fb.control('')]),

    })
  }


  createItem(): FormGroup {
    return this.fb.group({
      name: '',
      price: '',
    });
  }
  addItem(): void {
    this.meals = this.usrFormGroup.get('meals') as FormArray;
    this.meals.push(this.createItem());
  }

  get orders() {
    return this.usrFormGroup.get('meals') as FormArray;
  }

  createRecord() {

    console.log(this.usrFormGroup);
    let Record: any = {};
    Record['name'] = this.usrFormGroup.controls['ResturantName'].value;
    Record['adress'] = this.usrFormGroup.controls['ResturantAddress'].value;
    Record['meals'] = this.usrFormGroup.controls['meals'].value;

    this._crudservices.creatNewResturant(Record)
    this.router.navigate([`/ShowData`])

  }


  get ResturantName(){
    return this.usrFormGroup.get('ResturantName');
  }
  get ResturantAddress(){
    return this.usrFormGroup.get('ResturantAddress');
  }

  upload(event?:any) {
    this.filePath = event.target.files[0]
  }
  uploadImage():Observable<any>{
  this.ResturantImg=  this.afStorage.upload('/images/'+Math.random()+this.filePath, this.filePath);

   console.log(this.filePath)
this.ResturantImg= this.afStorage.refFromURL
return this.xfile.percentageChanges()
  }


}
