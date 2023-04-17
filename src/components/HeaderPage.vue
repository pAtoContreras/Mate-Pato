<template>
    <section class="header ">
        <nav class="nav2 ">
            <div class="logo">
                <img src="img/logo.png" alt="" id="" class="imgLogo">
            </div>
            <ul class="ul">
                <li><router-link :to="{ 'name': 'home'}">Home</router-link></li>
                <li><router-link :to="{ 'name': 'products'}">Products</router-link></li>
                <li><router-link :to="{ 'name': 'carte'}">Panier</router-link></li>
            </ul>

        </nav>
    </section>
</template>