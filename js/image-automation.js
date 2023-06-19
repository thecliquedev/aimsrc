window.onload = imgload;
function imgload() {
    var div_surgery = $('#surgery');
    var text1 = "";
    var i;
    for (let i = 1; i < 5; i++) {                
        text1 += "<div class='public-awareness-content'> <img src='img/mci/teaching-schedule/dept-of-surgery/deptofsurgery-"+i+".jpg' alt=''></div>"
    }
    div_surgery.append(text1)

    var div_time_table = $('#time_table');
    var text2 = "";
    var i;
    for (let i = 1; i < 54; i++) {                
        text2 += "<div class='public-awareness-content'> <img src='img/mci/teaching-schedule/time-table/time-table-"+i+".jpg' alt=''></div>"
    }
    div_time_table.append(text2)

    var div_forensic_medicine = $('#forensic_medicine');
    var text3 = "";
    var i;
    for (let i = 1; i < 38; i++) {                
        text3 += "<div class='public-awareness-content'> <img src='img/mci/teaching-schedule/FORENSIC-MEDICINE/FORENSIC-MEDICINE"+i+".jpg' alt=''></div>"
    }
    div_forensic_medicine.append(text3)

    var div_pathology = $('#pathology');
    var text4 = "";
    var i;
    for (let i = 1; i < 38; i++) {                
        text4 += "<div class='public-awareness-content'> <img src='img/mci/teaching-schedule/Pathology/Pathology-teaching"+i+".jpg' alt=''></div>"
    }
    div_pathology.append(text4)

    var div_pharmacology = $('#pharmacology');
    var text5 = "";
    var i;
    for (let i = 1; i < 33; i++) {                
        text5 += "<div class='public-awareness-content'> <img src='img/mci/teaching-schedule/pharmacology/pharmacology"+i+".jpg' alt=''></div>"
    }
    div_pharmacology.append(text5)

    var div_anatomy = $('#anatomy');
    var text6 = "";
    var i;
    for (let i = 1; i < 125; i++) {                
        text6 += "<div class='public-awareness-content'> <img src='img/mci/teaching-schedule/Anatomy/Anatomy"+i+".jpg' alt=''></div>"
    }
    div_anatomy.append(text6)

    var div_physiology = $('#physiology');
    var text7 = "";
    var i;
    for (let i = 1; i < 35; i++) {                
        text7 += "<div class='public-awareness-content'> <img src='img/mci/teaching-schedule/Physiology/"+i+".jpg' alt=''></div>"
    }
    div_physiology.append(text7)

    var div_biochemistry = $('#biochemistry');
    var text8 = "";
    var i;
    for (let i = 1; i < 59; i++) {                
        text8 += "<div class='public-awareness-content'> <img src='img/mci/teaching-schedule/biochemistry/Biochemistry-teaching-schedule"+i+".jpg' alt=''></div>"
    }
    div_biochemistry.append(text8)

    var div_community_medicine = $('#community_medicine');
    var text9 = "";
    var i;
    for (let i = 1; i < 59; i++) {                
        text9 += "<div class='public-awareness-content'> <img src='img/mci/teaching-schedule/community-medicine/Community-Medicine"+i+".jpg' alt=''></div>"
    }
    div_community_medicine.append(text9)
}