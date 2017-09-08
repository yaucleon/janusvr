



window.janus.createroom = function()
{
	//room properties (entrance portal position, etc)
	window.janus.room = {pos:"0 0 -10",fwd:"0 0 1",visible:false,
			skybox_down_id:"sky_down",skybox_right_id:"sky_right",skybox_left_id:"sky_left",
			skybox_up_id:"sky_up",skybox_back_id:"sky_back",skybox_front_id:"sky_front",
			cubemap_radiance_id:"skybox_radiance",cubemap_irradiance_id:"skybox_irradiance",
			cubemap_radiance_id:"Annotated_skybox_radiance",cubemap_irradiance_id:"Annotated_skybox_irradiance"};

		var trans_path = "http://downloads.janusvr.com/translator/imgur/";
		var trans_path2 = "http://downloads.janusvr.com/translator/";
    var trans_path3 = "file:///C:/Program Files/Janus VR/assets/";
		var x = document.getElementsByClassName('message');
		var channel = window.janus.url.substring(window.janus.url.indexOf(".tv/") + 4);
	//assets
	//window.janus.createasset("script", {src:trans_path3+"twitch/utility.js"});

      window.janus.createasset("websurface", {src:"https://player.twitch.tv/?volume=0.5&!muted&channel=" + channel, id:"streamsurface", width: 1920, height:1080});
      window.janus.createasset("object", {id:"room",src:trans_path3+"rooms/twitchroom.obj"});
      window.janus.createasset("object", {id:"colroom", src:trans_path3+"rooms/twitchroom.fbx"});
			//window.janus.createasset("object", {id:"room",http:"//vesta.janusvr.com/filebrowser/download/11360"});
      //window.janus.createasset("object", {id:"colroom", src:"http://vesta.janusvr.com/filebrowser/download/11361"});
			window.janus.createasset("websurface", {src:"https://www.twitch.tv/" + channel + "/chat?popout", id:"chatsurface", width: 600, height: 540});
			window.janus.createasset("object", {id:"chatscreen",src:trans_path2+"reddit/screensingle.obj"});
			window.janus.createasset("object", {id:"streamscreen",src:trans_path2+"reddit/screensingle.obj"});
			window.janus.createasset("image", {id:"sky_right",src:trans_path+"skyright.jpg"});
			window.janus.createasset("image", {id:"sky_front",src:trans_path+"skyfront.jpg"});
			window.janus.createasset("image", {id:"sky_up",src:trans_path+"skyup.jpg"});
			window.janus.createasset("image", {id:"sky_left",src:trans_path+"skyleft.jpg"});
			window.janus.createasset("image", {id:"sky_down",src:trans_path+"skydown.jpg"});
			window.janus.createasset("image", {id:"sky_back",src:trans_path+"skyback.jpg"});

			window.janus.createasset("image", {id:"skybox_radiance",src:trans_path+"ImgurSkyboxRadience.dds", tex_clamp:false, tex_linear:true});
			window.janus.createasset("image", {id:"skybox_irradiance",src:trans_path+"ImgurSkyboxIrRadience.dds", tex_clamp:false, tex_linear:true});



	//objects
      window.janus.createobject("object", {id:"room", collision_id:"colroom", pos:"0 0 -10", fwd:"0 0 -1"});
      //window.janus.createobject("text", {id : 'text_text',	text : channel,	pos : "0 1 10", fwd : "0 0 -1"});
			//window.janus.createobject("text", {id : "chat",	js_id:"js_chat", text : msgs.length,	pos : "2 1 10", fwd : "-1 0 -1", col : "111111"});
			window.janus.createobject("object", {id:"chatscreen", lighting:false, websurface_id:"chatsurface", pos:".825 1 5.95", fwd:"0 0 1", scale: ".5 1 .5"});
			window.janus.createobject("object", {id:"streamscreen", lighting:false, websurface_id:"streamsurface", pos:"0 1 1", fwd:"1 0 1", scale: "1 1 1"});


      //setTimeout(function() {

		//  window.janus.createobject("text", {id : 'chat',	text : x.length,	pos : "2 1 10", fwd : "-1 0 -1", col : "111111"});
		  //for (var i = 0; i < x.length; i++) {
		  //  window.janus.createobject("text"+i, {id : 'chattext', text : x[i].innerHTML.replace(/^"(.+(?="$))"$/, '$1'), pos : "3 "+ (1+(x.length -i))/4 +" 10", fwd : "-1 0 -1", col : "111111", scale : "5 5 5"});
		  //}
			//window.janus.createobject("text", {id : "chat",	js_id:"js_chat", text : x.length,	pos : "2 1 10", fwd : "-1 0 -1", col : "111111"});
	    //}, 8000);

	  //if (x.addEventListener) {
		//x.addEventListener("click", OnSubtreeModified, false);
	  //}
}
