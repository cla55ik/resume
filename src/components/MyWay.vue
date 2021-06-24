<template>
    <div class="projects-title-wrapper">
    <div class="line-orange orange-left">
        <hr size=5px width=80px align="left" color="#CE864B">
    </div>
    <div>
        <h2>Мой путь в Web</h2>
    </div>
    <div class="line-orange orange-right">
        <hr size=5px width=80px align="left" color="#CE864B">
    </div>
</div>
<div class="steps-wrapper" >
    <div v-for="(step, index) in steps" :key="index">
        <div class="year">
            <span>
                <img src="@/assets/img/round.svg" alt="">
            </span>
            <span>
                {{ step.year }}
            </span>
            
        </div>
        <div class="desc">
            {{ step.desc }}
        </div>
    </div>
    
</div>

</template>

<script>
export default {
    data: function(){
        return{
            steps:[
                {year:2017, desc:'Создание первого сайта на конструкторе.'},
                {year:2018, desc:'Разработка нескольких сайтов на конструкторах. PlatformaLP, Tilda. Изучение Веб-дизайна.'},
                {year:2019, desc:'Разработка нескольких сайтов на конструкторах. PlatformaLP, Tilda. Изучение интернет-маркетинга.'},
                {year:2020, desc:'Разработка сайтов на WordPress. Проекты Интернет-магазинов, корпоративных сайтов. Изучение HTML, CSS, JavaScript, SQL, основ PHP '},
                {year:2021, desc:'Проекты Интернет-магазинов, корпоративных сайтов. Продолжение изучения HTML, CSS, JavaScript, PHP. Изучение Bootstrap, Yii2, Vue.js, sass, scss'}
            ]
        }
    }
    
}
</script>

<style lang="scss" scoped>
     @import "@/assets/variables.scss";

    h2{
        font-size: 24px;
        line-height: 28px;
        font-size: normal;
        color: $sub-title-c;
    }

    .projects-title-wrapper{
        display: flex;
    }


    .projects-title-wrapper{
        @extend %d-flex;
        margin-top: 25px;
        margin-bottom: 40px;
        align-items: center;
    }

    .steps-wrapper{
        padding: 25px;
        border-radius: 10px;
        text-align: left;
        width: 100%;
        background-color: #1A1D23;
        width: auto;
        margin-bottom: 70px;
        filter: drop-shadow(2px 4px 5px rgba(26, 29, 35, 0.25));
    }

    .year{
        @extend %resume-experience-period;
    }

    .desc{
        @extend %resume-experience-description;
        padding: 20px 20px 20px 25px;
        margin: 15px 0px;
        border-left: 2px solid #e5e5e5;
    }

    .year img{
        width: 10px;
        margin-left: -4px;
        margin-right: 15px;
    }

    @media screen and (min-width:1200px) {
        .projects-title-wrapper{
            
            margin-top: 90px;
            margin-bottom: 60px;
            
        }  

         h2{
            font-size: 32px;
            line-height: 44px;
         
        }

         .steps-wrapper{
            padding: 45px;
            width: 55%;
            filter: drop-shadow(2px 4px 5px rgba(26, 29, 35, 0.25));
            margin-bottom: 0px;
        }

        .desc{
            padding: 20px 20px 20px 25px;
            margin: 15px 0px;
            border-left: 2px solid #e5e5e5;
        }

        .year img{
            width: 15px;
            margin-left: -6px;
            margin-right: 16px;
        }
    }
</style>