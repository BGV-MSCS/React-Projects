import '../scss/formcomp.scss';
import Button from './Button';
import '../scss/buttoncomp.scss'
import { useReducer ,useActionState} from "react";
import fn from "../helpers/formHelper";
import { formSubmittionHandler } from "../helpers/formHelper";
export default function FormComponent(){
  const [ state , formActionfn, isPending] = useActionState(formSubmittionHandler,"Not Yet Submitted");
   const [ formData , dispatch] = useReducer(fn,{
    firstName: "",
    lastName: "",
    emailAddress: "",
    contact: "",
    gender: {
        male: false,
        female: false,
        others: true,
    },
    subject: {
        english: "",
        maths: "",
        others: "",
    },
    resumeFile: "",
    url: "",
    option: "",
    about: "",
   });
  function handleInputChange(value,type){
    dispatch({
        type,
        value
    })
  }
  function handleReset(){
    dispatch({
        type: "Reset",
        value : ""
    })
  }
    return (
        <form action={formActionfn}>
            <label htmlFor="first">First Name</label>
            <input name="firstName" placeholder = "Enter First Name" id="first" required type="text" value={ formData.firstName } onChange = {(e)=>{
                handleInputChange(e.target.value,"firstNameChange")
            }} disabled = { isPending }></input>
            <label htmlFor="last">Last Name</label>
            <input name="lastName" placeholder = "Enter last Name" id="last" required type="text" value={ formData.lastName } onChange={(e)=>{
                handleInputChange(e.target.value,"lastNameChange")
            }} disabled = { isPending}></input>
            <label htmlFor="email">Enter Email</label>
            <input name="emailAddress" placeholder = "Enter email" id="email" required  type="email" value = { formData.emailAddress } onChange = {
                (e)=>{handleInputChange(e.target.value,"emailAddressChange")}
            } disabled = { isPending }></input>
            <label htmlFor="contact">Contact</label>
            <input name="contact" placeholder = "Enter Mobile Number" id="contact" type="phone" value= { formData.contact } onChange = {(e)=>{
                handleInputChange(e.target.value,"contactChange")
            }} disabled = { isPending }></input>
            <p>Gender</p>
            <div>
            <label htmlFor="male">Male</label>
            <input type = "radio" name="sex" id="male" value={formData?.gender.male} onChange = {(e)=>{
                handleInputChange(e.target.value,"genderChangeMale");
            }} disabled = { isPending }></input>
            <label htmlFor="female">Female</label>
            <input type = "radio" name="sex" id="female" value = { formData?.gender.female} onChange = {(e)=>{
                handleInputChange(e.target.value,"genderChangeFemale");
            }} disabled = { isPending }></input>
            <label htmlFor="others">Others</label>
            <input type = "radio" name="sex" id="others" value = { formData?.gender.others} onChange={(e)=>{
                handleInputChange(e.target.value,"genderChangeOthers");
            }} disabled = { isPending }></input>
            </div>
            <p>Your best Subject</p>
            <div>
                <input type = "checkbox" name="Subenglish" id="english" value={ formData?.subject.english} onChange = { (e)=>{
                    handleInputChange(e.target.checked,"SEnglish")
                }} disabled = { isPending }></input>
                <label htmlFor="english">English</label>
                <input type = "checkbox" name="Submaths" id="maths" value={formData?.subject.maths} onChange = { (e)=>{
                    handleInputChange(e.target.checked,"SMaths")
                }} disabled = { isPending }></input>
                <label htmlFor="maths">Maths</label>
                <input type = "checkbox" name="Subothers" id="othersSubjects" value = {formData?.subject.others} onChange={(e)=>{
                    handleInputChange(e.target.checked,"SOthers")
                }} disabled = { isPending }></input>
                <label htmlFor="othersSubjects">Others</label>
            </div>
            <label htmlFor="file">Upload Resume</label>
            <input type="file" placeholder="Select From Computer" id="file" name="resumeFile" onChange={
                (e)=>{
                    handleInputChange(e.target.files[0], "ResumeSelected");
                }
            } disabled = { isPending }></input>
            <label htmlFor = "porturl">Enter Url</label>
            <input type="text" name="url" id="porturl"  placeholder="Enter Url"  required value = {formData.url} onChange={(e)=>{
                handleInputChange(e.target.value, "urlAdded")
            }} disabled = { isPending}></input>
            <label htmlFor="select">Select your Choice</label>
            <select id="select" name="option" value = { formData.option} onChange={(e)=>{
                handleInputChange(e.target.value, "degreeChoosen");
            }} >
                <option value="">Select</option>
                <option value="graduate">Graduate</option>
                <option value="undergraduate">UnderGraduate</option>
            </select>
            <label htmlFor="about">About</label>
            <textarea id = "about" name="about" placeholder="About Your Self" rows="4" cols="50" value = {formData.about} onChange={(e)=>{
                handleInputChange(e.target.value,"BioAdded");
            }} disabled = { isPending } ></textarea>
            <div className="buttons">
                <Button name="Reset" action = { handleReset }></Button>
                <Button name="Submit" action = { formActionfn}></Button>
            </div>
            {state === "Success"?<p style = {{ backgroundColor: "green", color: "white"}}>Form Submitted</p> :isPending===true?<p style={{ color: "blue" }}>Submitting....</p>:<p style = {{ backgroundColor: "red", color: "white"}}>Something went wrong</p>}
        </form>
    );
}
