<template>
<div class="projects-title-wrapper">
    <div class="line-orange orange-left">
        <hr size=5px width=80px align="left" color="#CE864B">
    </div>
    <div>
        <h2>Проекты</h2>
    </div>
    <div class="line-orange orange-right">
        <hr size=5px width=80px align="left" color="#CE864B">
    </div>
</div>
<div class="projects-items-wrapper">
    <div class="item" v-for="(proj, index) in projects" :key="index">
        <div class="img">
            <img :src="require(`../assets/img/${proj.img}.jpg`)" alt="">
        </div>
        <div class="data">
            <h3>{{ proj.name }}</h3>
            <p class="desc">{{ proj.desc }}</p>
            <p class="stack-title">Стек технологий</p>
            <p class="stack">{{ proj.stack }}</p>
            <div class="project-links">
                <div class="link-site" v-show="proj.link">
                    <a :href="proj.link" target="_blank"><span>перейти на сайт</span> <img src="@/assets/img/arrow-proj.svg" alt=""></a>
                </div>
                <div class="link-git" v-show="proj.git">
                    <a  :href="proj.git" target="_blank">проект на GitHub</a>
                </div>
                
            </div>
        </div>
    </div>
</div>
    
</template>

<script>
export default {
    data:function(){
        return {
            projects:[
                {name:'Салон окон Rehau', desc:'Сайт оконной компании', stack:'PHP, HTML, Bootstrap, Vue.js, JavaScript, MySQL', link: 'https://dev.vseokna36.ru/', git:'https://github.com/cla55ik/vseokna36', img:'pro-1'},
                {name:'WeddingCat', desc:'Путеводитель по свадебному дню', stack:'Vue.js, HTML, CSS', link: 'https://weddingcat.site/', git:'https://github.com/cla55ik/wedding', img:'pro-2'},
                {name:'Богатырская услада', desc:'Сайт производителя мясных полуфабрикатов', stack:'PHP, HTML, Bootstrap, JavaScript, MySQL', link: 'http://hol.chelnokov.site/', git:'https://github.com/cla55ik/uslada', img:'pro-3'},
                {name:'Мебельная фабрика МАГ', desc:'Full-stack проект. Back-end с авторизацией, использованием CRUD, элементами CRM', stack:'PHP, HTML, Bootstrap, JavaScript, MySQL', link: 'http://mag.chelnokov.site/', git:'https://github.com/cla55ik/mag', img:'pro-4'},
                {name:'Календарь отпусков', desc:'Веб-приложение для планирования отпусков с разделением доступа по ролям пользователей', stack:'Yii2, HTML, Bootstrap, MySQL', link: '', git:'https://github.com/cla55ik/yii2-test', img:'pro-5'},
                {name:'BeloraWood', desc:'Сайт производителя изделий из дерева', stack:'WordPress, HTML, CSS', link: 'https://belorawood.art/', git:'', img:'pro-6'},
                {name:'ПроектСтройРеализация', desc:'Сайт строительной компании', stack:'WordPress, HTML, CSS', link: 'https://psrdom.ru/', git:'', img:'pro-7'},
                {name:'ArtLoft', desc:'Интернет-магазин винтажных дверей', stack:'WordPress, HTML, CSS', link: 'https://artloft.moscow/', git:'', img:'pro-8'},
                {name:'Inandout', desc:'Интернет-магазин одежды для Греческой компании', stack:'WordPress, PHP, HTML, CSS', link: 'https://inandout.gr/', git:'', img:'pro-9'},
                {name:'IMPROOVEBOOST', desc:'Интернет-магазин дополнений WoW', stack:'WordPress, HTML, CSS', link: 'https://improveboost.com/', git:'', img:'pro-10'},
            ]
        };
    },
    
}
</script>

<style  scoped lang="scss">
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


    .projects-items-wrapper .item{
        display: flex;
        flex-wrap: wrap;
        background: #353C47;
        border-radius: 5px;
        padding:25px;
        margin: 15px 0px;

    }

    .projects-items-wrapper .item:hover{
        box-shadow: 2px 2px 10px rgba(206, 134, 75, 0.6);
    }

    .projects-items-wrapper .item .img{
        width: 100%;
    }

    .projects-items-wrapper .item .data{
        width: 100%;
        
        text-align: left;
    }

    h3{
        @extend %proj-name;
    }

    .desc{
        @extend %proj-desc;
    }

    .stack-title{
        @extend %proj-stack-title;
    }

    .stack{
        @extend %stack;
    }

    .link-site a{
       font-weight: 500;
        font-size: 16px;
        line-height: 22px;
        /* identical to box height */

        text-decoration: none;
        color: #B9BABD;
        

    }

    .link-site a:hover{
        color: $main-title-c;
    }

    .link-site img{
        height: 10px;
    }

    .project-links{
        margin-top: 25px;
    }

    .project-links a{
            margin-top: 20px;
    }


    .link-git{
        display: inline-block;
        
        background: #79959A;
        border-radius: 5px;
        margin-top:10px;
        padding: 7px 25px;
        
    }

    .link-git:hover{
        background: #1A1D23;
    }

    .link-git a{
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        /* identical to box height */
        text-decoration: none;
        text-align: center;

        color: #E5E5E5;

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

        .projects-items-wrapper .item{
            padding:35px;
            margin: 20px 0px;
            
        }

        .projects-items-wrapper .item .img{
            width: 50%;
        }

        .projects-items-wrapper .item .img img{
            max-width: 100%;
            border-radius: 5px;
            filter: drop-shadow(2px 4px 5px rgba(26, 29, 35, 0.25));
        }

        .projects-items-wrapper .item .data{
            width: 40%;
            margin-left: 10%;
            text-align: left;
        }

        .link-site a{
           
            font-size: 18px;
            line-height: 27px;
           

        }

        .project-links{
             margin-top: 30px;
        }

        .link-site img{
            height: 15px;
        }
        
    }
    
</style>