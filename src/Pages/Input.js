import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '@fontsource/inter';
import InputView from "../Layout/features/InputView/InputView";
import { PrivateRoute } from "../Layout/features/globalFunctions/privateRoutes";

function Input() {

    const navigate = useNavigate();
    const [isValidToken, setIsValidToken] = useState(false);
    const [loading, setLoading] = useState(true)
    function Carregando(loading) {
        setLoading(!loading)
    }

    return (
        <>
            {loading &&
                <PrivateRoute Carregando={Carregando} loading={loading} />
            }
            {!loading && (
                <InputView />
            )
            }
        </>
    )
}

export default Input;
