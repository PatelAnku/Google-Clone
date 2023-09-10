const search_input=document.querySelector('.search_fields-input input')
clear=document.querySelector('.clear')
search_btn=document.querySelector('#search_btn')
let search_text;
search_input.addEventListener('keyup',(e)=>{
    //console.log(e.key);
    search_text=search_input.value;
    if(search_text.length >=1){
        clear.style.display='block';
    }
    else{
        clear.style.display='none';
    }
        if(e.key=="Enter"){
            googleSearch();
        }
    
})
clear.onclick=()=>{
    clear.style.display='none';
    search_input.value=''
}
search_btn.addEventListener('click',()=>{
    googleSearch();
})
function googleSearch(){
    if(search_text.length>=1){
        let url=`https://google.com/search?q=${search_text}`;
        window.location=url;
    }
}



            