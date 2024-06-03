import "quill/dist/quill.snow.css";
import Quill from "quill"

class QuillEditor extends HTMLElement{
    constructor(){
        super()
        this.render()
    }
    render(){
        this.innerHTML += `
            <div id="editor">
                <p>Isi Body Artikel</p>
            </div>
        `
        const toolbarOptions = [
            [{'header': [1,2,3,4,5,6,false]}],
            ['bold','italic','underline', 'strike', 'link', 'size'],
            [{'list': 'ordered'}, {'list': 'bullet'}],
        ]
          
        new Quill(document.getElementById('editor'), {
            theme: 'snow',
            modules: {
                toolbar: toolbarOptions
            },
        });
    }
}
customElements.define('quill-editor', QuillEditor)