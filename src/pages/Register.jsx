import Form from "../components/Form";
import Header from "../components/Header";

export default function Register() { 
    return ( 
        <> 
            <Header showWelcome={false}/>
            <Form type={'REGISTER'} />   
        </>
    )
}