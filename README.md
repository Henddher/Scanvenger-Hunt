# Scanvenger-Hunt

Hola Juan Pablo,

Dado que invertiste muchas horas creando un scavenger hunt para toda la familia, yo invertí varias horas crendo este pequeño rompecabezas sólo para ti. Espero que no te tardes mucho encontrando lo que tienes que hacer en éste paso ya que aún tienes un montón mas de pasos que resolver.

### 5 Seconds Crash Course

Por si acaso no recuerdas, aquí te pongo varios comandos que te serán útiles en la resolución de esta clave.

Para ejecutar código en JavaScript directamente en tu Chrome browser, usa los **Developer Tools**.

![Chrome Developer Tools](https://github.com/Henddher/Scanvenger-Hunt/blob/master/out.gif)

Prueba con los siguientes bloques (puedes hacer uno a la vez o todos juntos):

```javascript

(function() { 
  var po = document.createElement('script');
  po.type = 'text/javascript'; 
  po.async = true; 
  po.src = 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.1/underscore-min.js'; 
  var s = document.getElementsByTagName('script')[0]; 
  s.parentNode.insertBefore(po, s); 
})();

(function() {
  var po = document.createElement('link'); 
  po.type = 'text/css'; 
  po.rel = 'stylesheet'; 
  po.href = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'; 
  var s = document.getElementsByTagName('link')[0]; 
  s.parentNode.insertBefore(po, s); 
})();

(function() {
  var po = document.createElement('link'); 
  po.type = 'text/css'; 
  po.rel = 'stylesheet'; 
  po.href = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css'; 
  var s = document.getElementsByTagName('link')[0]; s.parentNode.insertBefore(po, s); 
})();

(function() {
  var m = "Felicitaciones Juan Pablo ! Injectaste Underscore.js y Bootstrap ... ";
  console.log(m);
  alert(m);
})();

```

Otro truco muy útil son los **script snippets**. En vez de copiar/pegar codigo en la cónsola, puedes crear snippets y correrlos cuando quieras. 

![Snippets](https://github.com/Henddher/Scanvenger-Hunt/blob/master/Screen%20Shot%202017-12-23%20at%204.57.11%20PM.png)

### Tu Misión

Como sabrás, te escondimos un mensaje secreto en Wikipedia. 

El mensaje es cási **mágico** (literalmente). Cuando estés en una página compatible, el mensaje aparecerá en el tope de la página si ejecutas los comandos correctos en la cónsola de Javascript.

### Será que puedes conseguir algo más en este repo que te ayudará a encontrar el mensaje secreto ?

Lo único que te podemos decir ahora es **Buena Suerte** 
