<template>
    <div class="footer-wrapper">
        <div class="developer">
            <img src="@/assets/img/logo-e5.svg" alt="" >
           
        </div>
        <div class="contacts">
            © Ivan Chelnokov {{ year }}
        </div>
    </div>
</template>

<script>
export default {
    data: function(){
        return{
            year:0,
        }
    },
    mounted:function(){
        var date = new Date();
        this.year = date.getFullYear();
    }
}
</script>

<style scoped>
    .footer-wrapper{
        background-color: #1A1D23;
        display: flex;
        flex-wrap: wrap;
        margin-top: 40px;
        margin-bottom: 10px;
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;
        border-radius: 10px;
        padding: 20px 25px;
        color: #E5E5E5;
        filter: drop-shadow(2px 4px 5px rgba(26, 29, 35, 0.25));
        align-items: center;
    }

   

    .developer {
        text-align: left;
        width: 20%;
        display: flex;
        align-items: center;
    }

    .contacts{
        width: 80%;
        text-align: right;
    }


    @media screen and (min-width:1200px){
        .footer-wrapper{
            margin: 70px 0px 30px 0px;
            padding: 30px 40px;
        }
    }
    
</style>