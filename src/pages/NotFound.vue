<template>
    <div class="container">
        <div class="not__found">
            <h2>404</h2>
            <p>Page not Found</p>
            <p>Вернуться на <router-link to="/">На главную</router-link></p>
        </div>
    </div>
</template>
<style lang="scss">
    .not__found{
        margin-top: -150px;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #fff;
        h2{
            font-size: 150px;
            line-height: 100%;
        }
        h2+p{
            font-size: 37px;
            margin-bottom: 15px;
        }
        p:last-child{
            font-size: 20px;
            a{
                color: rgb(19, 201, 218);
            }
        }
    }
</style>