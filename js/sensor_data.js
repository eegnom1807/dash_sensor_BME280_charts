
// Vuejs component that show a temperature chart
Vue.component('temp', {
    template: //html
    `
    <div id="temp">
        {{pruebaTemp(data)}}
        <div id="myTemp"><a class="zc-ref" href="https://www.zingchart.com/">Charts by ZingChart</a></div>
    </div>
    `,
    props: ['data'],
    methods: {
        pruebaTemp: function(param) {
            window.feed = function(callback) {
                var tick = {};
                tick.plot0 = parseInt(param.temp)
                callback(JSON.stringify(tick));
              };
            var myConfigTemp = {
                type: "gauge",
                globals: {
                  fontSize: 25
                },
                plotarea:{
                  marginTop:80
                },
                plot:{
                  size:'100%',
                  /* valueBox: {
                    placement: 'center',
                    text:'%v', //default
                    fontSize:35,
                    rules:[
                      {
                        rule: '%v >= 45',
                        text: '%v<br>HOT'
                      },
                      {
                        rule: '%v < 20 && %v > 24',
                        text: '%v<br>GOOD'
                      },
                      {
                        rule: '%v < 20 && %v > 15',
                        text: '%v<br>COLD'
                      },
                      {
                        rule: '%v <  10',
                        text: '%v<br> SUPER COLD'
                      }   
                    ]
                  } */
                },
             tooltip:{
               borderRadius:5
             },
                scaleR:{
                 aperture:180,
                 minValue:0,
                 maxValue:100,
                 step:5,
                 center:{
                   visible:false
                 },
                 tick:{
                   visible:false
                 },
                 item:{
                   offsetR:0,
                   rules:[
                     {
                       rule:'%i == 9',
                       offsetX:15
                     }
                   ]
                 },
                 //labels:['10','','','','','','15','20','30','80','','100'],
                 ring:{
                   size:50,
                   rules:[
                     {
                       rule:'%v <= 8',
                       //backgroundColor:'#E53935'
                     },
                     {
                       rule:'%v > 10 && %v < 18',
                       //backgroundColor:'#EF5350'
                     },
                     {
                       rule:'%v >= 20 && %v < 25',
                       //backgroundColor:'#FFA726'
                     },
                     {
                       rule:'%v >= 35',
                       //backgroundColor:'#E53935'
                     }      
                   ]
                 }
                },
             refresh:{  
                 type:"feed",
                 transport:"js",
                 url:"feed()",
                 interval:5000,
                 resetTimeout:0
             },
               series : [
                   {
                       values : [parseInt(param.temp)], // starting value
                       backgroundColor:'black',
                   indicator:[10,10,10,10,0.75],
                   animation:{  
                   effect:2,
                   method:1,
                   sequence:4,
                   speed: 900
                },
                   }
               ]
           };

            zingchart.render({ 
                id : 'myTemp', 
                data : myConfigTemp, 
                height: 300, 
                width: '100%'
            });
        }
    }
});

// Vuejs component that show a pressure chart
Vue.component('pres', {
    template: //html
    `
    <div id="press">
        {{pruebaPres(data)}}
        <div id="myPres"><a class="zc-ref" href="https://www.zingchart.com/">Charts by ZingChart</a></div>
    </div>
    `,
    props: ['data'],
    methods: {
        pruebaPres: function(param) {
            window.feed = function(callback) {
                var tick = {};
                tick.plot0 = parseInt(param.pres)
                callback(JSON.stringify(tick));
              };
            var myConfigPres = {
                type: "gauge",
                globals: {
                  fontSize: 25
                },
                plotarea:{
                  marginTop:80
                },
                plot:{
                  size:'100%',
                  /* valueBox: {
                    placement: 'center',
                    text:'%v', //default
                    fontSize:35,
                    rules:[
                      {
                        rule: '%v >= 45',
                        text: '%v<br>HOT'
                      },
                      {
                        rule: '%v < 20 && %v > 24',
                        text: '%v<br>GOOD'
                      },
                      {
                        rule: '%v < 20 && %v > 15',
                        text: '%v<br>COLD'
                      },
                      {
                        rule: '%v <  10',
                        text: '%v<br> SUPER COLD'
                      }   
                    ]
                  } */
                },
             tooltip:{
               borderRadius:5
             },
                scaleR:{
                 aperture:180,
                 minValue:0,
                 maxValue:100,
                 step:5,
                 center:{
                   visible:false
                 },
                 tick:{
                   visible:false
                 },
                 item:{
                   offsetR:0,
                   rules:[
                     {
                       rule:'%i == 9',
                       offsetX:15
                     }
                   ]
                 },
                 //labels:['10','','','','','','15','20','30','80','','100'],
                 ring:{
                   size:50,
                   rules:[
                     {
                       rule:'%v <= 8',
                       //backgroundColor:'#E53935'
                     },
                     {
                       rule:'%v > 10 && %v < 18',
                       //backgroundColor:'#EF5350'
                     },
                     {
                       rule:'%v >= 20 && %v < 25',
                       //backgroundColor:'#FFA726'
                     },
                     {
                       rule:'%v >= 35',
                       //backgroundColor:'#E53935'
                     }      
                   ]
                 }
                },
             refresh:{  
                 type:"feed",
                 transport:"js",
                 url:"feed()",
                 interval:5000,
                 resetTimeout:0
             },
               series : [
                   {
                       values : [parseInt(param.pres)], // starting value
                       backgroundColor:'black',
                   indicator:[10,10,10,10,0.75],
                   animation:{  
                   effect:2,
                   method:1,
                   sequence:4,
                   speed: 900
                },
                   }
               ]
           };

            zingchart.render({ 
                id : 'myPres', 
                data : myConfigPres, 
                height: 300, 
                width: '100%'
            });
        }
    }
});

// Vuejs component that show a humidity chart
Vue.component('hum', {
    template: //html
    `
    <div id="hum">
        {{pruebaHum(data)}}
        <div id="myHum"><a class="zc-ref" href="https://www.zingchart.com/">Charts by ZingChart</a></div>
    </div>
    `,
    props: ['data'],
    methods: {
        pruebaHum: function(param) {
            window.feed = function(callback) {
                var tick = {};
                tick.plot0 = parseInt(param.hum);
                callback(JSON.stringify(tick));
              };
            var myConfigHum = {
                type: "gauge",
                globals: {
                  fontSize: 25
                },
                plotarea:{
                  marginTop:80
                },
                plot:{
                  size:'100%',
                  /* valueBox: {
                    placement: 'center',
                    text:'%v', //default
                    fontSize:35,
                    rules:[
                      {
                        rule: '%v >= 45',
                        text: '%v<br>HOT'
                      },
                      {
                        rule: '%v < 20 && %v > 24',
                        text: '%v<br>GOOD'
                      },
                      {
                        rule: '%v < 20 && %v > 15',
                        text: '%v<br>COLD'
                      },
                      {
                        rule: '%v <  10',
                        text: '%v<br> SUPER COLD'
                      }   
                    ]
                  } */
                },
             tooltip:{
               borderRadius:5
             },
                scaleR:{
                 aperture:180,
                 minValue:0,
                 maxValue:100,
                 step:5,
                 center:{
                   visible:false
                 },
                 tick:{
                   visible:false
                 },
                 item:{
                   offsetR:0,
                   rules:[
                     {
                       rule:'%i == 9',
                       offsetX:15
                     }
                   ]
                 },
                 //labels:['10','','','','','','15','20','30','80','','100'],
                 ring:{
                   size:50,
                   rules:[
                     {
                       rule:'%v <= 8',
                       //backgroundColor:'#E53935'
                     },
                     {
                       rule:'%v > 10 && %v < 18',
                       //backgroundColor:'#EF5350'
                     },
                     {
                       rule:'%v >= 20 && %v < 25',
                       //backgroundColor:'#FFA726'
                     },
                     {
                       rule:'%v >= 35',
                       //backgroundColor:'#E53935'
                     }      
                   ]
                 }
                },
             refresh:{  
                 type:"feed",
                 transport:"js",
                 url:"feed()",
                 interval:5000,
                 resetTimeout:0
             },
               series : [
                   {
                       values : [parseInt(param.hum)], // starting value
                       backgroundColor:'black',
                   indicator:[10,10,10,10,0.75],
                   animation:{  
                   effect:2,
                   method:1,
                   sequence:4,
                   speed: 900
                },
                   }
               ]
           };

            zingchart.render({ 
                id : 'myHum', 
                data : myConfigHum, 
                height: 300, 
                width: '100%'
            });
        }
    }
});

// Vuejs component that show 3 panels whith information about sensor data
Vue.component('dash', {
    template: //html
    `
    <div>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a class="navbar-brand" href="https://www.adafruit.com/product/2652" target="_blank">Dash Sensor BME280</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
    </nav>

    <main role="main" class="container">

        <div class="starter-template">
            <div class="row">
                <div class="col-md-4">
                    <div class="card mb-3">
                        <!-- <img src="images/tc.jpeg" class="card-img-top img-fluid" alt="..."> -->
                        <temp :data="$store.state.datos"></temp>
                        <div class="card-body">
                            <h5 class="card-title">Temperature</h5>
                            <h1>{{datos.temp}}</h1>
                            <p class="card-text"><small class="text-muted">Last updated: {{datos.last_update}}</small></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card mb-3">
                        <!-- <img src="images/pc.jpeg" class="card-img-top img-fluid" alt="..."> -->
                        <pres :data="$store.state.datos"></pres>
                        <div class="card-body">
                            <h5 class="card-title">Pressure</h5>
                            <h1>{{datos.pres}}</h1>
                            <p class="card-text"><small class="text-muted">Last updated: {{datos.last_update}}</small></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card mb-3">
                        <!-- <img src="images/hc.jpeg" class="card-img-top img-fluid" alt="..."> -->
                        <hum :data="$store.state.datos"></hum>
                        <div class="card-body">
                            <h5 class="card-title">Humidity</h5>
                            <h1>{{datos.hum}}</h1>
                            <p class="card-text"><small class="text-muted">Last updated: {{datos.last_update}}</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="row">
               <h1>{{$store.state.datos}}</h1>
            </div> -->
        </div>

    </main><!-- /.container -->
    <footer class="my-5 pt-5 text-muted text-center text-small">
        <p class="mb-1">&copy; 2019 Dash Sensor</p>
    </footer>
    </div>
    `,
    computed: {
        ...Vuex.mapState(['datos'])
    }
});

const store = new Vuex.Store({
    state: {
        datos: {}
    },
    mutations: {
        setVariables(state, datosAccion) {
            state.datos = datosAccion;
        }
    },
    actions: {
        getDataSensor: function ({ commit }) {
            setInterval(async () => {
                const data = await fetch("http://192.168.100.10:5000/v1/sensor/data");
                const data_sensor = await data.json();
                commit('setVariables', data_sensor);
            }, 3000);
        }
    }
});

const app = new Vue({
    el: '#app',
    store: store,
    mounted() {
        store.dispatch('getDataSensor');
    }
});