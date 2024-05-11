document.addEventListener("DOMContentLoaded", function() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('aragacotn_h1').innerText = data.aragacotn_h1;
            document.getElementById('text').innerText = data.text;
            document.getElementById('marzer').innerText = data.marzer;

            document.getElementById('aragacotn').innerText = data.aragacotn;

            // document.getElementById('marzer_two').innerText = data.marzer_two;
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
            document.getElementById('text').innerText = data.text;
            document.getElementById('text').src = data.link;

            document.getElementById('araacotn_one_paragraph').innerText = data.araacotn_one_paragraph
            document.getElementById('anvanum').innerText = data.anvanum;
            document.getElementById('aragacotn_two_paragraph').innerText = data.aragacotn_two_paragraph;
            document.getElementById('h2_one').innerText = data.h2_one;
            document.getElementById('araacotn_three_paragraph').innerText = data.araacotn_three_paragraph;
            document.getElementById('tntesutyun').innerText = data.tntesutyun;
            document.getElementById('araacotn_four_paragraph').innerText = data.araacotn_four_paragraph;
            document.getElementById('mardkayin_neruj').innerText = data.mardkayin_neruj;
            document.getElementById('gitakan_kentron').innerText = data.gitakan_kentron;
            document.getElementById('aragacotn_six_paragraph').innerText = data.aragacotn_six_paragraph;
            document.getElementById('aragacotn_five_paragraph').innerText = data.aragacotn_five_paragraph;
            document.getElementById('transport').innerText = data.transport;
            document.getElementById('aragacotn_seven_paragraph').innerText = data.aragacotn_seven_paragraph;
            document.getElementById('bnakchutyun').innerText = data.bnakchutyun;
            document.getElementById('aragacotn_eith_paragraph').innerText = data.aragacotn_eith_paragraph;
            document.getElementById('cityes').innerText = data.cityes;
            document.getElementById('aragacotn_nine_paragraph').innerText = data.aragacotn_nine_paragraph;
            // document.getElementById('aragacotn_two').innerText = data.aragacotn_two;
            // document.getElementById('ararat_two').innerText = data.ararat_two;
            // document.getElementById('armavir_two').innerText = data.armavir_two;
            // document.getElementById('gexarquniq_two').innerText = data.gexarquniq_two;
            // document.getElementById('kotayq_two').innerText = data.kotayq_two;
            // document.getElementById('lori_two').innerText = data.lori_two;
            // document.getElementById('shirak_two').innerText = data.shirak_two;
            // document.getElementById('syuniq_two').innerText = data.syuniq_two;
            // document.getElementById('tavush_two').innerText = data.tavush_two;
            // document.getElementById('vayocDzor_two').innerText = data.vayocDzor_two;
            

        })
        .catch(error => console.error('Ошибка загрузки данных:', error));
});
