<template>
    <div>
        <div id="iframeContainer" class="border">
            <iframe v-if="selectedServer === 'server1'" :src="iframeSrc1" frameborder="0" width="100%" height="900px"
            allowfullscreen="allowfullscreen" scrolling="no"></iframe>
            <iframe v-if="selectedServer === 'server2'" :src="iframeSrc2" width="640" height="480"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; fullscreen; picture-in-picture"
            scrolling="no" seamless="" sandbox="allow-same-origin allow-scripts"></iframe>
        </div>
        <div class="from-group">
            <label for="serverSelect">Pilih Server: </label>
            <select v-model="selectedServer" id="serverSelect">
                <option value="server1">Server 1</option>
                <option value="server2">Server 2</option>
            </select>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        iframeSrc1: {
            type: String,
            required: true
        },
        iframeSrc2: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            selectedServer: 'server1'
        };
    }
};
</script>

<style scoped>
.from-group {
    background-color: var(--theme-color);
    border-radius: 2px;
    padding: 2px;
}

#iframeContainer {
    width: 100%;
    height: 500px;
}

iframe {
    width: 100%;
    height: 100%;
    border: none;
}
</style>