import React from "react"
import { Amplify } from "aws-amplify"
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react"
import awsexport from "./aws-exports"
import '@aws-amplify/ui-react/styles.css';
Amplify.configure(awsexport)
import AppRoute from "./routes/AppRoute"
import ProtectedLayout from "./components/layout/ProtectedLayout";

function App() {


  return (
    <>
      <Authenticator.Provider>
        <ProtectedLayout/>
        <AppRoute/>
      </Authenticator.Provider>
    </>
  )
}

export default App
