(function (window,document,undefined) {//IIFE
    async function hashAndSaltSolrPassword(password) {
        const magicNum = 101559956668416; //Math.pow(36, 9)
        // generates a pseudo random alphanumeric string of 16 characters 
        const salt = 
          window.Math.round(magicNum - window.Math.random() * magicNum).toString(36).slice(1) +
          window.Math.round(magicNum - window.Math.random() * magicNum).toString(36).slice(1) ;
        const saltedPassword = new window.TextEncoder().encode(salt + password);
        const hashBufferFirstPass = await window.crypto.subtle.digest('SHA-256', saltedPassword);
        const hashBufferSecondPass = await window.crypto.subtle.digest('SHA-256', hashBufferFirstPass);
        const hashBase64 = window.btoa(window.String.fromCharCode.apply(null, new window.Uint8Array(hashBufferSecondPass)));
        const saltb64 = window.btoa(salt);
        return hashBase64 + " " + saltb64;
    }

    document.getElementById("solr_password").addEventListener('input', async (evt) => {
        document.getElementById("solr_salted_hashed_password").innerText = await hashAndSaltSolrPassword(evt.target.value);
    }, false);
    
})(window,document);
