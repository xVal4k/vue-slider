const root = new Vue ({
    el: '#root',
    data: {
        arrayIndex: 0,
        images: [
        {
            name: 'Svezia',
            source: '01.jpg',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
        },
        {
            name: 'Svizzera',
            source: '02.jpg',
            text: 'Lorem ipsum'
        },
        {
            name: 'Gran Bretagna',
            source: '03.jpg',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
        },
        {
            name: 'Germania',
            source: '04.jpg',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
        },
        {
            name: 'Paradise',
            source: '05.jpg',
            text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
        }]    
    },
    methods: {
        next() {
            if (this.arrayIndex == this.images.length - 1) {
                this.arrayIndex = 0; 
            } else {
                this.arrayIndex++; 
            }
        },
        previus() {
            if (this.arrayIndex == 0) {
                this.arrayIndex = this.images.length - 1; 
            } else {
                this.arrayIndex--; 
            }
        },
        timeInterval() {
            timer = setInterval(this.next,3000);
        },
        stopTimeInterval() {
            clearInterval(timer);
        }
    },
    created() {
        this.timeInterval();
    }    
})