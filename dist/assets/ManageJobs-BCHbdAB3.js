var F=Object.defineProperty,P=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var N=(s,i,a)=>i in s?F(s,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[i]=a,j=(s,i)=>{for(var a in i||(i={}))A.call(i,a)&&N(s,a,i[a]);if(k)for(var a of k(i))R.call(i,a)&&N(s,a,i[a]);return s},T=(s,i)=>P(s,z(i));var y=(s,i,a)=>new Promise((p,u)=>{var x=r=>{try{m(a.next(r))}catch(d){u(d)}},l=r=>{try{m(a.throw(r))}catch(d){u(d)}},m=r=>r.done?p(r.value):Promise.resolve(r.value).then(x,l);m((a=a.apply(s,i)).next())});import{r as g,j as e}from"./react-CXIrnKA3.js";import{u as I,b as L,a as v}from"./useHooks-DGiJVRiT.js";import"./vendor-2Ef9aiF2.js";import"./axios-B81g5r4z.js";const M={title:"",description:"",skills:"",salary:"",location:"",jobType:"Full Time"};function q(){const{data:s,loading:i}=I("/api/manager/jobs"),[a,p]=g.useState([]),[u,x]=g.useState(!1),[l,m]=g.useState(null),[r,d]=g.useState(""),{form:n,setForm:E,onChange:b,reset:C}=L(M);g.useEffect(()=>{p(s||[])},[s]);const w=()=>{C(),m(null),x(!0),d("")},J=t=>{E(j({},t)),m(t.id),x(!0),d("")},S=t=>y(this,null,function*(){var o,h;t.preventDefault();try{if(l)yield v.put(`/api/manager/jobs/${l}`,n),p(c=>c.map(f=>f.id===l?T(j({},n),{id:l}):f));else{const c=yield v.post("/api/manager/jobs",n);p(f=>[c.data,...f])}x(!1)}catch(c){d(((h=(o=c.response)==null?void 0:o.data)==null?void 0:h.error)||"Failed to save job")}}),D=t=>y(this,null,function*(){if(window.confirm("Remove this job posting?"))try{yield v.delete(`/api/manager/jobs/${t}`),p(o=>o.filter(h=>h.id!==t))}catch(o){console.error(o),alert("Delete failed")}});return i?e.jsx("div",{className:"loading",children:"Loading jobs..."}):e.jsxs("div",{className:"main-content",children:[e.jsx("style",{children:`

        body {
          margin: 0;
          font-family: Arial;
          background: linear-gradient(
            135deg,
            #eef2ff,
            #f8fafc
          );
        }

        .main-content {
          padding: 25px;
          max-width: 1100px;
          margin: auto;
        }

        /* HEADER */

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .page-header h1 {
          font-size: 30px;
          font-weight: 800;

          background: linear-gradient(
            90deg,
            #6366f1,
            #06b6d4,
            #10b981
          );

          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .page-header p {
          color: #6b7280;
        }

        /* BUTTONS */

        .btn {
          padding: 10px 14px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          font-weight: bold;
          transition: 0.3s;
        }

        .btn-primary {
          background: linear-gradient(
            90deg,
            #6366f1,
            #06b6d4
          );

          color: white;
        }

        .btn-primary:hover {
          transform: translateY(-2px);

          box-shadow:
            0 10px 20px rgba(
              99,
              102,
              241,
              0.3
            );
        }

        .btn-outline {
          background: white;
          border: 1px solid #d1d5db;
        }

        .btn-danger {
          background: linear-gradient(
            90deg,
            #ef4444,
            #f97316
          );

          color: white;
        }

        .btn-sm {
          font-size: 12px;
          padding: 6px 10px;
        }

        /* JOB CARD */

        .job-card {
          background: white;
          padding: 18px;
          border-radius: 16px;
          margin-bottom: 12px;

          display: flex;
          justify-content: space-between;
          align-items: center;

          box-shadow:
            0 10px 25px rgba(
              0,
              0,
              0,
              0.08
            );

          transition: 0.3s;
        }

        .job-card:hover {
          transform: translateY(-4px);

          box-shadow:
            0 15px 30px rgba(
              99,
              102,
              241,
              0.15
            );
        }

        .job-title {
          font-weight: 700;
          font-size: 15px;
        }

        .job-meta {
          font-size: 12px;
          color: #6b7280;
          margin-top: 4px;
        }

        .skill-tag {
          background: linear-gradient(
            90deg,
            #e0e7ff,
            #dbeafe
          );

          color: #3730a3;

          padding: 4px 8px;

          border-radius: 20px;

          font-size: 11px;

          margin-right: 5px;
        }

        /* EMPTY */

        .empty {
          text-align: center;
          padding: 50px;
          background: white;
          border-radius: 16px;

          box-shadow:
            0 10px 25px rgba(
              0,
              0,
              0,
              0.05
            );
        }

        /* MODAL */

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;

          width: 100%;
          height: 100%;

          background: rgba(0,0,0,0.5);

          display: flex;
          justify-content: center;
          align-items: center;
        }

        .modal {
          background: white;
          padding: 20px;
          border-radius: 16px;
          width: 520px;

          animation: pop 0.2s ease;
        }

        @keyframes pop {

          from {
            transform: scale(0.9);
            opacity: 0;
          }

          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        input,
        textarea,
        select {

          width: 100%;

          padding: 10px;

          margin-top: 6px;

          border-radius: 8px;

          border: 1px solid #ddd;
        }

        label {
          font-weight: 600;
          font-size: 13px;
          color: #374151;
        }

        .form-group {
          margin-bottom: 12px;
        }

      `}),e.jsxs("div",{className:"header",children:[e.jsxs("div",{className:"page-header",children:[e.jsx("h1",{children:"Job Postings"}),e.jsxs("p",{children:[(a==null?void 0:a.length)||0," active jobs"]})]}),e.jsx("button",{className:"btn btn-primary",onClick:w,children:"+ Post Job"})]}),(a==null?void 0:a.length)===0?e.jsxs("div",{className:"empty",children:[e.jsx("h3",{children:"No jobs found"}),e.jsx("p",{children:"Create your first job posting"}),e.jsx("button",{className:"btn btn-primary",onClick:w,children:"Post Job"})]}):a==null?void 0:a.map(t=>{var o;return e.jsxs("div",{className:"job-card",children:[e.jsxs("div",{children:[e.jsx("div",{className:"job-title",children:t.title}),e.jsxs("div",{className:"job-meta",children:["📍 ",t.location," · ","💰 ",t.salary," · ","🕒 ",t.jobType]}),e.jsx("div",{style:{marginTop:6},children:(o=t.skills)==null?void 0:o.split(",").map((h,c)=>e.jsx("span",{className:"skill-tag",children:h},c))})]}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx("button",{className:"btn btn-outline btn-sm",onClick:()=>J(t),children:"Edit"}),e.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>D(t.id),children:"Delete"})]})]},t.id)}),u&&e.jsx("div",{className:"modal-overlay",onClick:()=>x(!1),children:e.jsxs("div",{className:"modal",onClick:t=>t.stopPropagation(),children:[e.jsx("h2",{children:l?"Edit Job":"Post New Job"}),r&&e.jsx("p",{style:{color:"red"},children:r}),e.jsxs("form",{onSubmit:S,children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Title"}),e.jsx("input",{name:"title",value:n.title,onChange:b,required:!0})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Location"}),e.jsx("input",{name:"location",value:n.location,onChange:b})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Salary"}),e.jsx("input",{name:"salary",value:n.salary,onChange:b})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Job Type"}),e.jsxs("select",{name:"jobType",value:n.jobType,onChange:b,children:[e.jsx("option",{children:"Full Time"}),e.jsx("option",{children:"Part Time"}),e.jsx("option",{children:"Internship"}),e.jsx("option",{children:"Contract"})]})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Skills"}),e.jsx("input",{name:"skills",value:n.skills,onChange:b})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Description"}),e.jsx("textarea",{name:"description",value:n.description,onChange:b,rows:4})]}),e.jsx("button",{className:"btn btn-primary",type:"submit",children:l?"Update":"Post"})]})]})})]})}export{q as default};
