document.addEventListener("DOMContentLoaded", function() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('header_h1').innerText = data.header;
            document.getElementById('title').innerText = data.header;
            document.getElementById('h3_one').innerText = data.h3_one;
            document.getElementById('h3_two').innerText = data.h3_two;
            document.getElementById('yerevan').innerText = data.yerevan;
            document.getElementById('h3_three').innerText = data.h3_three;
            document.getElementById('marzer').innerText = data.marzer;
            document.getElementById('marzer_two').innerText = data.marzer_two;
            document.getElementById('aragacotn').innerText = data.aragacotn;
            document.getElementById('ararat').innerText = data.ararat;
            document.getElementById('armavir').innerText = data.armavir;
            document.getElementById('gexarquniq').innerText = data.gexarquniq;
            document.getElementById('kotayq').innerText = data.kotayq;
            document.getElementById('lori').innerText = data.lori;
            document.getElementById('shirak').innerText = data.shirak;
            document.getElementById('syuniq').innerText = data.syuniq;
            document.getElementById('tavush').innerText = data.tavush;
            document.getElementById('vayocDzor').innerText = data.vayocDzor;
            document.getElementById('abovyan').innerText = data.abovyan;
            document.getElementById('erevan').innerText = data.erevan;
            document.getElementById('vanadzor').innerText = data.vanadzor;
            document.getElementById('berd').innerText = data.berd;
            document.getElementById('link_home_page').innerText = data.text;
            document.getElementById('link_home_page').src = data.link;


            document.getElementById('aragacotn_two').innerText = data.aragacotn_two;
            document.getElementById('ararat_two').innerText = data.ararat_two;
            document.getElementById('armavir_two').innerText = data.armavir_two;
            document.getElementById('gexarquniq_two').innerText = data.gexarquniq_two;
            document.getElementById('kotayq_two').innerText = data.kotayq_two;
            document.getElementById('lori_two').innerText = data.lori_two;
            document.getElementById('shirak_two').innerText = data.shirak_two;
            document.getElementById('syuniq_two').innerText = data.syuniq_two;
            document.getElementById('tavush_two').innerText = data.tavush_two;
            document.getElementById('vayocDzor_two').innerText = data.vayocDzor_two;
            
        })
        .catch(error => console.error('Ошибка загрузки данных:', error));
});
