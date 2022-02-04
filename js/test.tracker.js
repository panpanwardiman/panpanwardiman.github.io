(function(){
    var trackerScroll = 0;
    document.querySelector('.chatbot__icon').addEventListener('click', function() {
        send_ga('Klik Pin');
    });  
    document.querySelector('.chatbot__logo').addEventListener('click', function() {
        send_ga('Klik Logo');
    });      
    document.querySelector('.chatbot__icon--close img').addEventListener('click', function() {
        send_ga('Klik Tombol Close');
    });    
    document.querySelector('.type__msg').addEventListener('click', function() {
        trackerScroll = 1;
        send_ga('Klik Area Filter Pertanyaan');
        document.querySelectorAll('.msg__choice, .msg__promo').forEach(function(item) {
            item.addEventListener('click', function() {
                send_ga('Klik Pertanyaan');
            })
        })
    });
    document.querySelector('.type__msg').addEventListener('blur', function(e) {
        const value = e.target.value.replace(/(<([^>]+)>)/ig, "");
        if (value != "") {
            send_ga(value);
        }        
    });
    document.querySelector('.msg__pick').addEventListener('scroll', function() {
        if (trackerScroll == 1) {
            trackerScroll = 0;
            send_ga('Scroll Pertanyaan');
        }
    });

    function send_ga(event_action) {
        if ('ga' in window) {
            tracker = ga.getAll()[0];
            if (tracker) {
                tracker.send('event', 'Chatbot', event_action);
                console.info(event_action);
            }
        }
    }
}())
