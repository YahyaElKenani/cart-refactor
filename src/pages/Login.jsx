import Form from "../components/Form";
import Header from "../components/Header";

export default function Login() { 
    return ( 
        <>
            <Header showWelcome={false}/> 
            <Form type={'LOG_IN'} />
        </>
    )
}