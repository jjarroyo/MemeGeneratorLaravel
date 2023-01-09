
const memeContainer = document.getElementById('meme-container');

$(function() {
    $(document).on("change",".uploadFile", function()
    {
    	var uploadFile = $(this);
        var files = !!this.files ? this.files : [];
        if (!files.length || !window.FileReader) return; 
 
        if (/^image/.test( files[0].type)){ 
            var reader = new FileReader();
            reader.readAsDataURL(files[0]); 
            reader.onloadend = function(){                
                $("#meme-image").css("background-image", "url("+this.result+")");
                $("#meme-image").css("background-position", "center");
            }
        }
      
    });

    $("#withoutBackColor").on("change",function(){
        if ($(this).is(':checked')) {
            $("#top-text").css("background-color", 'transparent');
            $("#top-text").css("position", "absolute");
            $("#top-text").css("top", "0");
            $("#bottom-text").css("background-color", 'transparent');
            $("#bottom-text").css("position", "absolute");
            $("#bottom-text").css("bottom", "0");
        }else{
            $("#top-text").css("background-color", $("#fontBack").val());
            $("#top-text").css("position", "static");     
            $("#bottom-text").css("background-color", $("#fontBack").val());
            $("#bottom-text").css("position", "static");
        }
    })  


    $("#fontSize").on("input",function(){      
        $("#top-text").css("font-size", `${$(this).val()}px`);          
        $("#bottom-text").css("font-size",  `${$(this).val()}px`);
    })  

    

    $("#fontType").on("change",function(){       
        $("#top-text").css("font-family", $(this).val());          
        $("#bottom-text").css("font-family", $(this).val());
    }) 
    

    $("#fontColor").on("change",function(){       
        $("#top-text").css("color", $(this).val());          
        $("#bottom-text").css("color", $(this).val());
    }) 

    $("#fontBack").on("change",function(){       
        $("#top-text").css("background-color", $(this).val());          
        $("#bottom-text").css("background-color", $(this).val());
    }) 
    
    $("#withoutBottomText").on("change",function(){
        if ($(this).is(':checked')) {        
            $("#bottom-text").css("display", "none");
        }else{
            $("#bottom-text").css("display", "block");
        }
    })  

    $("#withoutTopText").on("change",function(){
        if ($(this).is(':checked')) {        
            $("#top-text").css("display", "none");
        }else{
            $("#top-text").css("display", "block");
        }
    }) 
    
    $("#ButtomAsideText").on("input",function(){      
         $("#bottom-text").text($(this).val())
    })  

    $("#topAsideText").on("input",function(){      
        $("#top-text").text($(this).val())
    })

    $("#donwload").on("click",function(){      
        domtoimage.toBlob(memeContainer)
        .then(function (blob) {
            saveAs(blob, 'mi-meme.png');
        });
    }) 
   
});