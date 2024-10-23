import {Component, ElementRef, Input} from '@angular/core';
import {Button} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {InputTextModule} from "primeng/inputtext";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PetResponse} from "../../interfaces/PetResponse";
import {FloatLabelModule} from "primeng/floatlabel";
import {Gender} from "../../interfaces/Gender";
import {ListboxModule} from "primeng/listbox";
import {DropdownModule} from "primeng/dropdown";
import {CalendarModule} from "primeng/calendar";
import {ToastModule} from "primeng/toast";
import {FileUploadModule, UploadEvent} from "primeng/fileupload";
import {MessageService} from "primeng/api";
import {NgIf} from "@angular/common";
import {HomePetOwnerService} from "../../services/home-pet-owner.service";
import {TypeForm} from "../../interfaces/type-form.enum";
import {UploadService} from "../../../../../shared/service/upload.service";
import {formatDateToYYYYMMDD} from "../../../../../shared/helpers/date.formater";

@Component({
  selector: 'app-form-add-pet',
  standalone: true,
  imports: [
    Button,
    DialogModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    FloatLabelModule,
    ListboxModule,
    DropdownModule,
    CalendarModule,
    ToastModule,
    FileUploadModule,
    NgIf,
  ],
  templateUrl: './form-add-pet.component.html',
  styleUrl: './form-add-pet.component.css'
})
export class FormAddPetComponent {
  @Input() closeDialog!:()=>void;
  @Input() mode!:TypeForm;
  @Input() pet:PetResponse|undefined;

  myForm:FormGroup;
  imageUrl: string | ArrayBuffer | null | undefined = null;
  genders!: Gender [];
  buttonTitle:string = "";

  ngOnInit() {
    this.genders = [
      { name: 'Male', id: 1 },
      { name: 'Female', id: 2 },
    ];
    console.log({mode:this.mode, petEdit:this.pet});
    this.myForm = this.fb.group<PetResponse>({
      name: this.mode === TypeForm.ADD ? "" : this.pet?.name,
      breed: this.mode === TypeForm.ADD ? "" : this.pet?.breed,
      species: this.mode === TypeForm.ADD ? "" : this.pet?.species,
      image_url: this.mode === TypeForm.ADD ? "" : this.pet?.image_url,
      gender: this.mode === TypeForm.ADD ? undefined : this.getGenderByName(this.pet?.gender!),
      weight: this.mode === TypeForm.ADD ? undefined : this.pet?.weight,
      birthdate: this.mode === TypeForm.ADD ? undefined: new Date(this.pet?.birthdate!)
    })
    this.imageUrl = this.pet?.image_url;
    this.buttonTitle = this.mode === TypeForm.ADD ? "Add" : "Edit";
  }
  constructor(
    private fb:FormBuilder,
    private messageService: MessageService,
    private uploadService: UploadService,
    private homePetOwnerService: HomePetOwnerService
  ) {
    this.myForm = this.fb.group<PetResponse>({
      name: "",
      breed: "",
      species: "",
      image_url: "",
      gender: undefined,
      weight: undefined,
      birthdate: undefined
    })
    this.imageUrl = this.pet?.image_url;
  }
  async onImageSelect(event:any) {
    const file = event.files[0]; // Obtener el primer archivo seleccionado
    console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageUrl = e.target?.result; // Asigna la vista previa
        // Limpiar el input del archivo después de cargar la imagen
        const fileUploadInput = document.querySelector<HTMLInputElement>('input[type="file"]');
        if (fileUploadInput) {
          fileUploadInput.value = ''; // Limpiar el valor del input
        }
      };
      reader.readAsDataURL(file);
      // Subir archivo
       this.imageUrl= await this.uploadService.uploadFile(file);
    }
  }
  submitForm(){
    const petRequest:PetResponse = {
      ...this.myForm.value,
      birthdate: formatDateToYYYYMMDD(this.myForm.value["birthdate"]),
      gender: this.myForm.value.gender["name"],
      image_url: this.imageUrl as string
    };
    console.log({petRequest});
    if(this.mode === TypeForm.ADD){
    this.homePetOwnerService.createPet(petRequest,1).subscribe(data=>{
      alert("Pet created successfully");
    });}
    else{
      this.homePetOwnerService.updatePet(petRequest,this.pet!.id!).subscribe(data=>{
        alert("Pet updated successfully");
        window.location.reload();
      });
    }
  }
  getGenderByName(name:string):any{
    return this.genders.find((object)=>object.name === name);
  }

}
