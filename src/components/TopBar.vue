<template>
    <div id="top-bar-container">
        <div style="display: flex; align-items: center; justify-content: flex-start; flex-direction: row;">
            <div id="avatar">
                <img :src="avatarImg" alt="avatar" style="width: 30px;">
            </div>
            <div id="username">
                Hi，孙笑川
            </div>
            <div id="instruction-link">
                使用指南与操作手册 >
            </div>
        </div>
        <div style="display: flex; align-items: center; justify-content: flex-end; flex-direction: row;">
            <a-tooltip title="通知">
                <a-badge count="5">
                    <a-button shape="circle" :icon="h(AlertOutlined)" />
                </a-badge>
            </a-tooltip>
        </div>
    </div>
</template>

<script setup lang="ts">
import { h } from 'vue';
import { AlertOutlined } from '@ant-design/icons-vue';
import avatarImg from "@/assets/avatar19.png"

interface Props {

}
const props = defineProps<Props>()
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#top-bar-container {
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

}

#avatar {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}

#username {
    margin-left: 15px;
    color: rgb(56, 63, 76);
    font-size: 18px;
    font-weight: bold;
}

#instruction-link {
    color: rgb(106, 116, 134);
    margin-left: 40px
}
</style>
