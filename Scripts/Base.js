pc.script.create(
	'base', 
	 function(context){
		  var Base = function(entity){
				this.entity = entity;

				this.isMove = false;
				this.pos = new pc.Vec3();

				pc.events.attach(this);

				context.mouse.disableContextMenu();

				context.mouse.on(pc.input.EVENT_MOUSEMOVE, this.onMouseMove, this);
				context.mouse.on(pc.input.EVENT_MOUSEDOWN, this.onMouseDown, this);
		  
		  };

		  Base.prototype = {
				onMouseMove: function(event){
					if( !this.isMove )	return;

					 // Use the camera component's screenToWorld function to convert the 
					 // position of the mouse into a position in 3D space
					 var depth = 10;
					 var cameraEntity = context.root.findByName('Camera');
					 cameraEntity.camera.screenToWorld(event.x, event.y, depth, this.pos);
					
					this.entity.setPosition(this.pos);

				};
				
				onMouseDown: function(event){
					  this.isMove = !this.isMove;

				 };

		  };

		  return Base;
	 }
);

