
export default function fn(initialState, action){
  switch(action.type){
    case "firstNameChange": {
        return {
            ...initialState,
            firstName: action.value,
        }
    }
    case "lastNameChange": {
        return {
            ...initialState,
            lastName: action.value,
        }
    }
    case "emailAddressChange":{
        return {
            ...initialState,
            emailAddress: action.value,
        }
    }
    case "contactChange": {
        return {
            ...initialState,
            contact: action.value,
        }
    }
    case "genderChangeMale": {
        return {
            ...initialState,
            gender: {
                ...initialState.gender,
                male: action.value,
            },
        }
    }
    case "genderChangeFemale": {
        return {
            ...initialState,
            gender: {
                ...initialState.gender,
                female: action.value,
            },
        }
    }
    case "genderChangeOthers": {
        return {
            ...initialState,
            gender: {
                ...initialState.gender,
                others: action.value,
            },
        }
    }
    case "SEnglish": {
        return {
            ...initialState,
            subject: {
                ...initialState.subject,
                english: action.value,
            }
        }
    }
    case "SMaths": {
        return {
            ...initialState,
            subject: {
              ...initialState.subject,
              maths: action.value,
            }
        }
    }
    case "SOthers": {
        return  {
            ...initialState,
            subject: {
              ...initialState.subject,
              others: action.value,
            }
        }
    }
    case "ResumeSelected": {
        return {
            ...initialState,
            resumeFile: action.value?.name ?? "",
        }
    }
    case "urlAdded": {
        return {
            ...initialState,
            url: action.value,
        }
    }
    case "degreeChoosen": {
        return {
            ...initialState,
            option: action.value
        }
    }
    case "BioAdded": {
        return {
            ...initialState,
            about: action.value,
        }
    }
    case "Reset": {
        return {
            ...initialState,
                firstName: "",
                lastName: "",
                emailAddress: "",
                contact: "",
                gender: {
                    ...initialState.gender,
                    male: false,
                    female: false,
                    others: true,
                },
                subject: {
                    ...initialState.subject,
                    english: "",
                    maths: "",
                    others: "",
                },
                resumeFile: "",
                url: "",
                option: "",
                about: "",  
        }
    }
    default: throw new Error("Something went Wrong")
  }
}

export async function formSubmittionHandler(previousState, formData){
    console.log("hello")
    let firstName = formData.get('firstName');
    let lastName = formData.get('lastName');
    let emailAddress = formData.get('emailAddress');
    let contact = formData.get('contact');
    let gender = formData.get('sex');
    let englishSubject = formData.get('Subenglish');
    let mathsSubject = formData.get('Submaths');
    let otherSubject = formData.get('Subothers');
    let resume = formData.get('resumeFile');
    let url = formData.get('url');
    let course = formData.get('option');
    let bio = formData.get('about');
 console.log("first name",firstName);
  if(firstName===undefined){
    return "First Name sh'd be a valid input";
  }else if(lastName===undefined){
    return "Last name sh'd be a valid input"
  }else if(emailAddress===undefined){
    return "Email address is Required";
  }else if(contact === undefined){
    return "Contact is Empty";
  }else if(gender===undefined){
    return "Please Choose your Gender";
  }else if(resume===undefined){
    return "Please choose the valid Resume"
  }else if(url===undefined){
    return "Please add the valid URL";
  }else if(course===undefined){
    return "Please Choose the valid Course";
  }else if(bio === undefined){
    return "Please add proper testArea";
  }else {
    console.log("the resume data:",resume);
    let data = {
        firstName,
        lastName,
        emailAddress,
        contact,
        gender: "male",
        subject: {
            english: englishSubject,
            maths: mathsSubject,
            others: otherSubject, 
        },
        resume: resume,
        url: url,
        course: course,
        bio: bio,
    }
   try{
    let options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(data),
    }
     let response = await fetch('http://localhost:2345/submit/formdata',options);
     if(response.status===200){
        return "Success";
     }else{
        return "Failure";
     }
   }catch(error){ 
     return "Failure, Something went wrong";
   }
  }
} 