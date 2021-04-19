var canvas = new fabric.Canvas('myCanvas');
player_x=10;
player_y=10;
b_i_width=30;
b_i_height=30;
var p_object="";
var b_i_object="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        p_object=Img;
        p_object.scaleToHeight(140);
        p_object.scaleToWidth(150);
        p_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(p_object);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        b_i_object=Img;
        b_i_object.scaleToHeight(b_i_height);
        b_i_object.scaleToWidth(b_i_width);
        b_i_object.set({
            top:player_y,
            left:player_x
});
canvas.add(b_i_object);
});
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{

    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == "80")
    {
    console.log("p and shift pressed together");
    b_i_width=b_i_width + 10;
    b_i_height=b_i_height + 10;
    document.getElementById("current_width").innerHTML=b_i_width;
    document.getElementById("current_height").innerHTML=b_i_height;
    }

    if (e.shiftKey  && keyPressed == "77")
    {
    console.log("m and shift pressed together");
    b_i_width=b_i_width - 10;
    b_i_height=b_i_height - 10;
    document.getElementById("current_width").innerHTML=b_i_width;
    document.getElementById("current_height").innerHTML=b_i_height;
    }

    if (keyPressed == '38')
    {
      up();
      console.log("up");
    }
  
    
    if (keyPressed == '40')
    {
      down();
      console.log("down");
    }


    if (keyPressed == '37')
    {
     left();
      console.log("left");
    }
    

    if (keyPressed == '39')
    {
      right();
      console.log("right");
    }
    
    if (keyPressed == '87')
    {
      new_image('wall.jpg');
      console.log("w");
    }
    


    if (keyPressed == '71')
    {
      new_image('ground.png');
      console.log("g");
    }


    if (keyPressed == '76')
    {
      new_image('light_green.png');
      console.log("l");
    }
    

    if (keyPressed == '84')
    {
      new_image('trunk.jpg');
      console.log("t");
    }
    

    if (keyPressed == '82')
    {
      new_image('roof.jpg');
      console.log("r");
    }
    

    if (keyPressed == '89')
    {
      new_image('yellow_wall.png');
      console.log("y");
    }
    

    if (keyPressed == '68')
    {
      new_image('dark_green.png');
      console.log("d");
    }
    

    if (keyPressed == '85')
    {
      new_image('unique.png');
      console.log("u");
    }
    

    if (keyPressed == '67')
    {
      new_image('cloud.jpg');
      console.log("c");
    }
    

    
    


}
