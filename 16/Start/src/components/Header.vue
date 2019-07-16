<template>
  <ul class="nav nav-pills nav-fill">
    <!-- router-link generates the anchor tag at the end -->
    <!-- <li class="nav-item active"> <router-link to="/">Home</router-link></li>
    <li class="nav-item"> <router-link to="/user">User</router-link></li> -->
    <!-- We can use exact to check the exact path to set it active and not the root tag. -->

    <!-- Logic behind being active of both the links:
    Actually, the a tag checks for the main domain i.e, localhost:8080 and whenever it finds that, it marks
    the home as active. Now, we are going to have the domain in every URl so, the HOME will always be active.
    If we wish to avoid that behaviour, we can simply use the property exact. It checks the exact URL and
    then checks which navbar item/route it refers to. -->
    <router-link to="/" tag="li" active-class="nav-item active" exact><a>Home</a></router-link>
    <router-link to="/user" tag="li" active-class="nav-item active"><a>User</a></router-link>
    <!-- The ID doesn't get changed when loaded spearately to check. This is because the component doens't get recreated.
    So, we do not get the dynamic ID according to the URL.
    If we are already in that component, and only the path changes, then the component doesn't get created. -->
    <!-- <router-link to="/user/2" tag="li" active-class="nav-item active"><a>User - 2</a></router-link> -->
  </ul>
</template>

<script>
export default {};
</script>

<style>
</style>