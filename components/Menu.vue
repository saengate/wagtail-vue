<template>
    <div id="nav">
        <b-navbar toggleable="md" type="dark" variant="dark">
            <b-navbar-brand>
                <img height="30" width="30" alt="SaenGate logo" src="~/assets/images/favicon.png" />
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item to="/">{{ $t("pages.home") }}</b-nav-item>
                    <b-nav-item to="/game">{{ $t("pages.game") }}</b-nav-item>
                    <b-nav-item to="/contact">{{ $t("pages.contact") }}</b-nav-item>
                    <b-nav-item to="/blog">{{ $t("pages.blog") }}</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: "Menu",
};
</script>
