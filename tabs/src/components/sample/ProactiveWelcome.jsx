import React, { useState } from 'react'
import { Menu } from "@fluentui/react-northstar";
import "./Welcome.css";
import {SendMessageUser} from './SendMessageUser'
import {SendMessageGroup} from './SendMessageGroup'

export const ProactiveWelcome = () => {

    const titel = {
        "align-items": "center",
        "text-align": "center"
    }
    const steps = ["usuario", "grupo", "test"];
    const friendlyStepsName = {
        usuario: "1.Enviar alerta a un usuario especifico",
        grupo: "2. Enviar alerta a un grupo espécifico",
        test: "3. Plantilla de test",
    };
    const [selectedMenuItem, setSelectedMenuItem] = useState("usuario");
    const items = steps.map((step) => {
        return {
            key: step,
            content: friendlyStepsName[step] || "",
            onClick: () => setSelectedMenuItem(step),
        };
    });

    return (
        <>
            <h1 style={titel} >Bienvenido al sistema de alertas</h1>
            <h4 style={titel}>Seleccione la opcion a trabajar</h4>
            <div className='welcome page'>
                <div className="narrow page-padding">
                    <Menu defaultActiveIndex={0} items={items} underlined secondary />
                </div>
                <div className="sections">
                    {selectedMenuItem === "usuario" && (
                        <div>
                           <SendMessageUser />
                        </div>
                    )}
                    {selectedMenuItem === "grupo" && (
                        <div>
                           <SendMessageGroup />

                        </div>
                    )}
                    {selectedMenuItem === "test" && (
                        <div>
                            <ProactiveWelcome />
                        </div>
                    )}
                </div>
            </div>

        </>
    )
}
