<?php

/**
 * Controller por defecto si no se usa el routes
 *
 */
Load::lib('servicio_api');

class IndexController extends AppController
{
    public function index()
    {
        
    }    
    public function listar() {
        View::template(NULL); 
        View::select('listar');
        $servicio_api = new servicio_api();
        if (Input::hasPost('periodo')) {
            $periodo = Input::post('periodo');
            $desde = Input::post('desde');
            $hasta = Input::post('hasta');
            $this->data = $servicio_api->obtiene_sinindice($periodo, $desde, $hasta);  
        }  else {
            Redirect::to();
        }
        
    }
    public function graficar() {
        View::template(NULL);
        View::select('graficar');        
        $servicio_api = new servicio_api();
        if (Input::hasPost('indice')) {
            $indice = Input::post('indice');
            $periodo = Input::post('periodo');
            $desde = Input::post('desde');
            $hasta = Input::post('hasta');
            $this->data = $servicio_api->obtiene_conindice($indice, $periodo, $desde, $hasta);  
        }  else {
            Redirect::to();
        }        
    }
}
