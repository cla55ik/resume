<template>
<div class="typewriter">
    <span>IVAN/CHELNOKOV/WEB/DEVELOPER</span>
</div>
<div class="head-img-text">
    <div class="line-orange orange-left">
        <hr size=5px width=80px align="left" color="#CE864B">
    </div>
    <div class="img">
        <img src="@/assets/img/ivan-p2.png" alt="">
    </div>
    <div class="text">
        <h1>Иван<br> Челноков</h1>
        <p>33 года, родился 25 марта 1988</p>
    </div>
    <div class="line-orange orange-right">
        <hr size=5px width=80px align="left" color="#CE864B">
    </div>
</div>
</template>

<script>
export default{

}
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
    div.typewriter{
        font-family: 'Source Code Pro', monospace !important;
        color: #fff;
        text-align: left;
        
    }


    .head-img-text{
        @extend %d-flex;
        margin-top: 25px;
        align-items: center;
        background-color: #1A1D23;
        padding: 20px 25px;
        border-radius: 10px;
        filter: drop-shadow(2px 4px 5px rgba(26, 29, 35, 0.25));
    }

    .head-img-text .img img{
        background-color: #BEBDBB;
        border-radius: 250px;
        width: 120px;
        height: 120px;
        object-fit: contain;
    }

    .head-img-text .text h1{
        @extend %title-h1;

    }

    p{
        color:$sub-title-c;
        text-align: left;
        font-size: 12px !important;
    }

    .text{
        margin-left: 25px;
        align-items: flex-end;
        display:flex;
        flex-wrap: wrap;
        align-content: flex-end;
    }

    .img {
        display:flex;
        flex-wrap: wrap;
        align-content: flex-end;
    }

   
        

    @media screen and (min-width:1200px) {
        .text p{
            width: 100%;
            margin-top: 20px;
            font-size: 20px !important;
        }

        .img img{
            width: 200px !important;
            height: 200px !important;
        }

        .text{
            margin-left:45px;
        }

        .head-img-text{
            padding: 30px 40px;
            
        }

        .typewriter{
            margin-top: 50px;
        }

        

    }


</style>