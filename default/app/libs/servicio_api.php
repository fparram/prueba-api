<?php

class servicio_api {

    function __construct() {
        
    }

    public function obtiene_sinindice($periodo, $f_desde, $f_hasta) {
        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => "http://bcstest.mybluemix.net/bcstest/rest/indices/consultaIndices?periodo="."$periodo&f_desde=$f_desde&f_hasta=$f_hasta",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "GET",
            CURLOPT_HTTPHEADER => array(
                "Cache-Control: no-cache"                
            ),
        ));

        $response = curl_exec($curl);
        $err = curl_error($curl);

        curl_close($curl);
        $listado = json_decode($response, TRUE);
        $arreglo["data"] = $listado['indicesItem'];

        if ($err) {
            echo "cURL Error #:" . $err;
        } else {
            return $arreglo;
        }
    }
    public function obtiene_conindice($indice, $periodo, $f_desde, $f_hasta) {
        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => "http://bcstest.mybluemix.net/bcstest/rest/indices/consultaIndices?indice="."$indice&periodo=$periodo&f_desde=$f_desde&f_hasta=$f_hasta",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "GET",
            CURLOPT_HTTPHEADER => array(
                "Cache-Control: no-cache"
            ),
        ));

        $response = curl_exec($curl);
        $err = curl_error($curl);

        curl_close($curl);
        $listado = json_decode($response, TRUE);
        $arreglo = $listado['indicesItem'];
        
        if ($err) {
            echo "cURL Error #:" . $err;
        } else {
            return $arreglo;
        }
    }

}
