$(document).ready(function() {
    $.ajax({
        //url: "http://rest-service.guides.spring.io/greeting"
        url: "http://179.99.210.60:8024/zserv/xmlexec/JXENT=%7B%22bukrs%22:[%221000%22,%222000%22]%7D"
    }).then(function(data) {
       $('.greeting-id').append(data.id);
       $('.greeting-content').append(data.content);
    });
});