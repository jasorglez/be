Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"ModeloAlmacen","publishDate":"12/02/2018 03:11:13 p. m.","pages":[{"id":"7865015d-0478-45e6-a2ef-e35ec2279fa6","name":"Modelo General","version":"1.0","author":"harce","image":"files\\diagrams\\Modelo_General.png","isSubprocessPage":false,"elements":[{"id":"d02cc7a5-d4f6-4d2f-9c21-824df5a4b553","name":"Almacenes","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1130.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"28ed7db4-ab58-473a-a669-a63c7bfb05a8","name":"Event","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":130.0,"y":70.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"7bf729c2-df98-403e-856e-47952a11b53f","name":"Seleccionar Proyecto","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":205.0,"y":55.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"cf731124-ae35-44d3-aba2-00b712b1a68e","name":"Configuración de Almacen","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":336.0,"y":130.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8bc3d832-ced6-4f4e-a020-6f4dd457d9d4","name":"Carga de Catálogos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":460.0,"y":130.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"956f769e-d84a-4e8f-b3d8-c0467bddea53","name":"Entrada inicial de inventario","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":586.0,"y":130.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"98917273-15e2-416b-b7fc-9fef067b58fc","name":"¿De un Almacen?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":750.0,"y":140.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"No","elementType":"SequenceFlow","properties":[]},{"name":"Si","elementType":"SequenceFlow","properties":[]}]},{"id":"3a1b0689-29cc-4da8-a560-9d078480b0db","name":"Registo de requisiciónes","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":849.0,"y":393.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"db5f29dc-47d4-4122-9d95-31fffb4b2549","name":"¿Requisicion Correcta?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":982.0,"y":137.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"No","elementType":"SequenceFlow","properties":[]},{"name":"Si","elementType":"SequenceFlow","properties":[]}]},{"id":"b64d6c94-5c35-437e-bdec-a532b994c3a9","name":"Valida requisición","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1207.0,"y":127.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1fb1451e-65bb-4c83-a5ef-06e3894d0e29","name":"¿Requisicion Valida?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1232.0,"y":632.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"No","elementType":"SequenceFlow","properties":[]},{"name":"Si","elementType":"SequenceFlow","properties":[]}]},{"id":"002abc0c-3f49-46b7-bed7-2bb6443946cb","name":"Desvalida Requisición","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1073.0,"y":217.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"92bb2d4a-c314-4dc1-9150-7ceb3b71bf09","name":"Autoriza Requisición","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1336.0,"y":622.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0f42e67a-bec9-4803-a88d-248b8665ca75","name":"¿Hay existencias?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1490.0,"y":196.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"No","elementType":"SequenceFlow","properties":[]},{"name":"Si","elementType":"SequenceFlow","properties":[]}]},{"id":"295df83e-d5df-4218-ae69-246ece80f0a5","name":"Registro de Ordenes de Compra","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1635.0,"y":819.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b3706047-cfde-45ba-bcb6-b00b4e71cb59","name":"¿Orden de compra correcta?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1756.0,"y":408.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"No","elementType":"SequenceFlow","properties":[]},{"name":"Si","elementType":"SequenceFlow","properties":[]}]},{"id":"71a418d0-50d8-4729-9d5a-91a1af598586","name":"Valida Orden de Compra","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2023.0,"y":398.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d976fcf5-2b76-4cf4-a78c-389e5a0f56a3","name":"¿Orden de compra Válida?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":2048.0,"y":1030.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"No","elementType":"SequenceFlow","properties":[]},{"name":"Si","elementType":"SequenceFlow","properties":[]}]},{"id":"442f696c-3015-4e40-8e87-1f571c140097","name":"Desvalida Orden de Compra","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1873.0,"y":471.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b9029adf-4290-4f8a-a910-507b8a44853a","name":"Autoriza Orden de Compra","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2155.0,"y":1020.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2ca0950b-9076-45e3-a1d3-addc694aec97","name":"Generar Entrada al Almacen","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2465.0,"y":166.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"206e5548-2b26-4d32-9586-b1eff1af0ec0","name":"Generar Salida del Almacen","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2685.0,"y":166.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"acfef071-d43a-4796-9732-a6904a94a4e8","name":"Generar traspaso","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":3025.0,"y":130.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4832001f-7b23-4489-adba-08b5daf7da81","name":"Fin","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":3055.0,"y":431.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"4e82704a-f5fb-4114-9676-328445e22fbb","name":"Almacenista","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":307.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"f4756488-8f07-4689-97ea-c5b00aac4e04","name":"Lider de Proyecto","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":327.0}],"radius":0.0,"height":223.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"6c3f1978-6bb1-493b-baea-f2e404dc6c70","name":"Supervisor de Almacen","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":550.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"b593ee76-57cb-44b1-8282-7f5da94a71ce","name":"Ejecutivo de Compras","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":750.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"13b5373a-3784-44a3-888f-9de055c2ed3e","name":"Supervisor de Compras","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":950.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"2738355e-1aee-47bf-8ccb-48ef9f45d985","name":"Carga Inicial","elementImage":"files\\bpmnElements\\Milestone.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":30.0,"width":634.0,"shape":"rect"},"elementType":"Milestone","properties":[],"pageElements":[]},{"id":"ad563590-9894-4a50-a1c1-6d558cb5bb6e","name":"Requisicion de Materiales","elementImage":"files\\bpmnElements\\Milestone.png","imageBounds":{"points":[{"x":704.0,"y":20.0}],"radius":0.0,"height":30.0,"width":889.0,"shape":"rect"},"elementType":"Milestone","properties":[],"pageElements":[]},{"id":"305f6c66-f020-4026-a078-78fe1c66f2aa","name":"Ordenes de Compra","elementImage":"files\\bpmnElements\\Milestone.png","imageBounds":{"points":[{"x":1593.0,"y":20.0}],"radius":0.0,"height":30.0,"width":764.0,"shape":"rect"},"elementType":"Milestone","properties":[],"pageElements":[]},{"id":"452f6cd1-4887-40e5-aa6a-31e6a6be079e","name":"Recepcion de Materiales","elementImage":"files\\bpmnElements\\Milestone.png","imageBounds":{"points":[{"x":2357.0,"y":20.0}],"radius":0.0,"height":30.0,"width":253.0,"shape":"rect"},"elementType":"Milestone","properties":[],"pageElements":[]},{"id":"39f51f7f-f3cd-4519-89ae-26be24387d0e","name":"Entrega de Materiales","elementImage":"files\\bpmnElements\\Milestone.png","imageBounds":{"points":[{"x":2610.0,"y":20.0}],"radius":0.0,"height":30.0,"width":300.0,"shape":"rect"},"elementType":"Milestone","properties":[],"pageElements":[]},{"id":"ee936dcf-87d7-4753-99c9-fa81b44a7f3b","name":"Traspaso","elementImage":"files\\bpmnElements\\Milestone.png","imageBounds":{"points":[{"x":2910.0,"y":20.0}],"radius":0.0,"height":30.0,"width":300.0,"shape":"rect"},"elementType":"Milestone","properties":[],"pageElements":[]}]}]}],"texts":{"tableOfContents":"Tabla de Contenidos","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versión","author":"Autor","description":"Descripción","mainPool":"Proceso principal","mainPoolDescription":"Proceso principal Descripción","processDiagrams":"Diagramas de Proceso","processElements":"Elementos del proceso","elements":"Elementos del proceso","defaultElementName":"Elemento","performers":"Ejecutantes","connectors":"Conectores","connector":"Conector","home":"Home","search":"Buscar","goToParentProcess":"<< Ir al proceso padre","visitBizagi":"Visite bizagi.com","contains":"Contiene {0} Subprocesos","showAll":"Ver todo","fullScreen":"Pantalla completa","zoomIn":"Acercar","zoomOut":"Alejar","close":"Cerrar","menu":"Menu: ","errorPage":"Error al visualizar la página","process":"Proceso","subProcess":"Subprocesos publicados","contain":"Contains","checkAttributes":"Ver atributos","checkOverview":"Ver resumen","unavailableResource":"El recurso no esta disponible","localResource":"El recurso puede accederse localmente","performer":"Ejecutante","linktoimage":"Hipervínculo a imagen","presentationAction":"Acciones de presentación","searchGlobal":"Buscar todo","searchLocal":"Buscar en este proceso","searchResults":"No se encontraron resultados","titlePage":"Inicio","emptyElement":"Este elemento aún no se ha documentado","unsupported":"Su navegador no soporta contenido mostrado en esta página. <br> Le recomendamos actualizar su navegador.","details":"Detalles","expand":"Expandir","mainPoolProperties":"Propiedades Proceso principal","cannotVisualize":"No es posible visualizar correctamente","resourceNotFound":"No se encontró el recurso solicitado:","applyTheme":"Aplicando el tema"},"searchMap":[{"containerId":"7865015d-0478-45e6-a2ef-e35ec2279fa6","containerName":"Modelo General","isSubprocess":false,"elements":[{"id":"d02cc7a5-d4f6-4d2f-9c21-824df5a4b553","value":"Almacenes"},{"id":"4e82704a-f5fb-4114-9676-328445e22fbb","value":"Almacenista"},{"id":"f4756488-8f07-4689-97ea-c5b00aac4e04","value":"Lider de Proyecto"},{"id":"6c3f1978-6bb1-493b-baea-f2e404dc6c70","value":"Supervisor de Almacen"},{"id":"b593ee76-57cb-44b1-8282-7f5da94a71ce","value":"Ejecutivo de Compras"},{"id":"13b5373a-3784-44a3-888f-9de055c2ed3e","value":"Supervisor de Compras"},{"id":"2738355e-1aee-47bf-8ccb-48ef9f45d985","value":"Carga Inicial"},{"id":"ad563590-9894-4a50-a1c1-6d558cb5bb6e","value":"Requisicion de Materiales"},{"id":"305f6c66-f020-4026-a078-78fe1c66f2aa","value":"Ordenes de Compra"},{"id":"452f6cd1-4887-40e5-aa6a-31e6a6be079e","value":"Recepcion de Materiales"},{"id":"39f51f7f-f3cd-4519-89ae-26be24387d0e","value":"Entrega de Materiales"},{"id":"ee936dcf-87d7-4753-99c9-fa81b44a7f3b","value":"Traspaso"},{"id":"28ed7db4-ab58-473a-a669-a63c7bfb05a8","value":""},{"id":"cf731124-ae35-44d3-aba2-00b712b1a68e","value":"Configuración de Almacen"},{"id":"8bc3d832-ced6-4f4e-a020-6f4dd457d9d4","value":"Carga de Catálogos"},{"id":"956f769e-d84a-4e8f-b3d8-c0467bddea53","value":"Entrada inicial de inventario"},{"id":"3a1b0689-29cc-4da8-a560-9d078480b0db","value":"Registo de requisiciónes"},{"id":"db5f29dc-47d4-4122-9d95-31fffb4b2549","value":"¿Requisicion Correcta?"},{"id":"b64d6c94-5c35-437e-bdec-a532b994c3a9","value":"Valida requisición"},{"id":"295df83e-d5df-4218-ae69-246ece80f0a5","value":"Registro de Ordenes de Compra"},{"id":"1fb1451e-65bb-4c83-a5ef-06e3894d0e29","value":"¿Requisicion Valida?"},{"id":"92bb2d4a-c314-4dc1-9150-7ceb3b71bf09","value":"Autoriza Requisición"},{"id":"002abc0c-3f49-46b7-bed7-2bb6443946cb","value":"Desvalida Requisición"},{"id":"b3706047-cfde-45ba-bcb6-b00b4e71cb59","value":"¿Orden de compra correcta?"},{"id":"71a418d0-50d8-4729-9d5a-91a1af598586","value":"Valida Orden de Compra"},{"id":"d976fcf5-2b76-4cf4-a78c-389e5a0f56a3","value":"¿Orden de compra Válida?"},{"id":"b9029adf-4290-4f8a-a910-507b8a44853a","value":"Autoriza Orden de Compra"},{"id":"442f696c-3015-4e40-8e87-1f571c140097","value":"Desvalida Orden de Compra"},{"id":"2ca0950b-9076-45e3-a1d3-addc694aec97","value":"Generar Entrada al Almacen"},{"id":"206e5548-2b26-4d32-9586-b1eff1af0ec0","value":"Generar Salida del Almacen"},{"id":"4832001f-7b23-4489-adba-08b5daf7da81","value":"Fin"},{"id":"0f42e67a-bec9-4803-a88d-248b8665ca75","value":"¿Hay existencias?"},{"id":"98917273-15e2-416b-b7fc-9fef067b58fc","value":"¿De un Almacen?"},{"id":"acfef071-d43a-4796-9732-a6904a94a4e8","value":"Generar traspaso"},{"id":"7bf729c2-df98-403e-856e-47952a11b53f","value":"Seleccionar Proyecto"}]}]}