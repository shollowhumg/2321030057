var danhsach = [
    {
        id: 1,
        link: "https://www.youtube.com/embed/dExQTNFoX0o"
    },
    {
        id: 2,
        link: "https://www.youtube.com/embed/dsOsq6TOuOM"
    },
    {
        id: 3,
        link: "https://www.youtube.com/embed/Z-nuqgm_U8o"
    },
    {
        id: 4,
        link: "https://www.youtube.com/embed/N5-ACZ7BQyc"
    },
    {
        id: 5,
        link: "https://www.youtube.com/embed/wgTdBHSTjBY"
    }
];

function chuyen(id){
     for (let i = 0; i< danhsach.length;i++){
        if(danhsach[i].id == id){
            document.getElementsByClassName("video")[0].src = danhsach[i].link;
        }
     }

}
