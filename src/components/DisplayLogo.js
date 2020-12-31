import React from 'react'

export default function DisplayLogo() {
    return (
        <>
            <center>
                <img src ={process.env.PUBLIC_URL + "/images/hardbanklogo.png"} width= "150px" height = "150px" />
            </center>
        </>
    )
}
