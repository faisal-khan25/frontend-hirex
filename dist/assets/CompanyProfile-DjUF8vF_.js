var y=Object.defineProperty,N=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var h=(r,i,a)=>i in r?y(r,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[i]=a,p=(r,i)=>{for(var a in i||(i={}))k.call(i,a)&&h(r,a,i[a]);if(f)for(var a of f(i))z.call(i,a)&&h(r,a,i[a]);return r},x=(r,i)=>N(r,w(i));var j=(r,i,a)=>new Promise((l,t)=>{var c=o=>{try{s(a.next(o))}catch(d){t(d)}},n=o=>{try{s(a.throw(o))}catch(d){t(d)}},s=o=>o.done?l(o.value):Promise.resolve(o.value).then(c,n);s((a=a.apply(r,i)).next())});import{r as g,j as e}from"./react-CXIrnKA3.js";import{u as E,b as R,a as C}from"./useHooks-DGiJVRiT.js";import"./vendor-2Ef9aiF2.js";import"./axios-B81g5r4z.js";function L(){const{data:r,loading:i}=E("/api/manager/company"),[a,l]=g.useState(""),[t,c]=g.useState(""),{form:n,setForm:s,onChange:o}=R({name:"",description:"",website:"",location:"",industry:"",logoUrl:"",size:""});g.useEffect(()=>{r&&s(m=>x(p(p({},m),r),{size:r.size||""}))},[r,s]);const d=m=>j(this,null,function*(){var u,b;m.preventDefault();try{yield C.post("/api/manager/company",x(p({},n),{size:Number(n.size)})),l("Company profile saved successfully 🎉"),c("")}catch(v){c(((b=(u=v.response)==null?void 0:u.data)==null?void 0:b.error)||"Failed to save company"),l("")}});return i?e.jsx("div",{className:"loading",children:"Loading..."}):e.jsxs("div",{className:"main-content",children:[e.jsx("style",{children:`
        body {
          background: linear-gradient(135deg, #eef2ff, #f8fafc);
        }

        .main-content {
          max-width: 900px;
          margin: auto;
          padding: 30px;
        }

        /* HEADER */
        .page-header h1 {
          font-size: 30px;
          font-weight: 800;
          background: linear-gradient(90deg, #6366f1, #06b6d4, #10b981);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .page-header p {
          color: #6b7280;
          margin-bottom: 20px;
        }

        /* CARD */
        .card {
          background: white;
          border-radius: 18px;
          padding: 24px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.08);
          border: 1px solid #eef2ff;
        }

        /* PREVIEW BANNER (DYNAMIC GRADIENT) */
        .preview-banner {
          background: linear-gradient(135deg, #4f46e5, #06b6d4, #10b981);
          background-size: 300% 300%;
          animation: gradientMove 6s ease infinite;
          border-radius: 16px;
          padding: 20px;
          margin-bottom: 25px;
          display: flex;
          align-items: center;
          gap: 16px;
          color: white;
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .logo-box {
          width: 60px;
          height: 60px;
          border-radius: 14px;
          background: rgba(255,255,255,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
        }

        .company-name {
          font-size: 18px;
          font-weight: 700;
        }

        .company-meta {
          font-size: 13px;
          opacity: 0.8;
        }

        /* FORM */
        .form-group {
          margin-bottom: 16px;
        }

        label {
          font-weight: 600;
          font-size: 13px;
          color: #374151;
          display: block;
          margin-bottom: 6px;
        }

        input, textarea {
          width: 100%;
          padding: 12px;
          border-radius: 10px;
          border: 1px solid #e5e7eb;
          outline: none;
          transition: 0.2s;
          font-size: 14px;
        }

        input:focus, textarea:focus {
          border-color: #6366f1;
          box-shadow: 0 0 0 3px rgba(99,102,241,0.2);
        }

        /* GRID */
        .grid-2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }

        @media (max-width: 768px) {
          .grid-2 {
            grid-template-columns: 1fr;
          }
        }

        /* BUTTON */
        .btn {
          padding: 12px 16px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          font-weight: 700;
          transition: 0.3s;
        }

        .btn-primary {
          background: linear-gradient(90deg, #6366f1, #06b6d4);
          color: white;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(99,102,241,0.3);
        }

        /* ALERTS */
        .alert-success {
          background: #dcfce7;
          color: #166534;
          padding: 10px;
          border-radius: 10px;
          margin-bottom: 10px;
        }

        .alert-error {
          background: #fee2e2;
          color: #991b1b;
          padding: 10px;
          border-radius: 10px;
          margin-bottom: 10px;
        }

        .loading {
          text-align: center;
          padding: 30px;
          font-weight: 600;
          color: #6366f1;
        }
      `}),e.jsxs("div",{className:"page-header",children:[e.jsx("h1",{children:"Company Profile"}),e.jsx("p",{children:"Manage your company details and attract top talent"})]}),e.jsxs("div",{className:"card",children:[n.name&&e.jsxs("div",{className:"preview-banner",children:[e.jsx("div",{className:"logo-box",children:"🏢"}),e.jsxs("div",{children:[e.jsx("div",{className:"company-name",children:n.name}),e.jsx("div",{className:"company-meta",children:[n.industry,n.location].filter(Boolean).join(" • ")})]})]}),a&&e.jsx("div",{className:"alert-success",children:a}),t&&e.jsx("div",{className:"alert-error",children:t}),e.jsxs("form",{onSubmit:d,children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Company Name *"}),e.jsx("input",{name:"name",value:n.name,onChange:o,required:!0})]}),e.jsxs("div",{className:"grid-2",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Industry"}),e.jsx("input",{name:"industry",value:n.industry,onChange:o})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Location"}),e.jsx("input",{name:"location",value:n.location,onChange:o})]})]}),e.jsxs("div",{className:"grid-2",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Website"}),e.jsx("input",{name:"website",value:n.website,onChange:o})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Team Size"}),e.jsx("input",{type:"number",name:"size",value:n.size,onChange:o})]})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Logo URL"}),e.jsx("input",{name:"logoUrl",value:n.logoUrl,onChange:o})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"About Company"}),e.jsx("textarea",{name:"description",value:n.description,onChange:o,rows:4})]}),e.jsx("button",{className:"btn btn-primary",type:"submit",children:"Save Profile"})]})]})]})}export{L as default};
