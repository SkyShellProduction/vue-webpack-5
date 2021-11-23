<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__content">
                <div class="footer__logo">
                   <Logo />
                    <div class="footer__social">
                        <a v-for="(link, i) in socialLinks" :key="i" 
                           :href="[`//www.${link.url}`]" 
                           class="footer__social-link" target="_blank">
                            <span class="icon-brand">{{link.icon}}</span>
                        </a>
                    </div>
                </div>
                <div class="footer__lists">
                    <ul class="footer__list" v-for="(link, i) in infoLinks" :key="i">
                        <li>
                            <a :href="link.url" class="footer__link">{{link.name}}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
import Logo from '@/components/Logo.vue';
export default {
    components: {Logo},
    data () {
        return {
            socialLinks: [
                {name: 'Facebook', url: 'facebook.com', icon: ''},
                {name: 'Twitter', url: 'twitter.com', icon: ''},
                {name: 'linkedIn', url: 'linkedin.com', icon: ''},
                {name: 'Instagram', url: 'instagram.com', icon: ''},
            ],
            infoLinks: [
                {name: 'Privacy', url: '#!'},
                {name: 'Legal Provisions', url: '#!'},
                {name: 'Help Center', url: '#!'},
                {name: 'Corporate Informations', url: '#!'},
            ]
        }
    }
}
</script>