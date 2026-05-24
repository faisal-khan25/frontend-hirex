var b=(o,p,t)=>new Promise((g,s)=>{var l=r=>{try{d(t.next(r))}catch(c){s(c)}},x=r=>{try{d(t.throw(r))}catch(c){s(c)}},d=r=>r.done?g(r.value):Promise.resolve(r.value).then(l,x);d((t=t.apply(o,p)).next())});import{r as h,j as a}from"./react-CXIrnKA3.js";import{u as f,a as m}from"./useHooks-DGiJVRiT.js";import{S as u}from"./StatusBadge-CK5yTWRP.js";import"./vendor-2Ef9aiF2.js";import"./axios-B81g5r4z.js";const j=["APPLIED","SHORTLISTED","REJECTED","HIRED"];function T(){const{data:o,loading:p}=f("/api/manager/jobs"),[t,g]=h.useState(null),[s,l]=h.useState([]),[x,d]=h.useState(!1),r=e=>b(this,null,function*(){g(e),d(!0);try{const n=yield m.get(`/api/manager/jobs/${e.id}/applicants`);l(n.data)}catch(n){l([])}finally{d(!1)}}),c=(e,n)=>b(this,null,function*(){yield m.put(`/api/manager/applications/${e}/status`,{status:n});const i=yield m.get(`/api/manager/jobs/${t.id}/applicants`);l(i.data)});return p?a.jsx("div",{className:"loading",children:"Loading jobs..."}):a.jsxs("div",{className:"layout",children:[a.jsx("style",{children:`
        body {
          margin: 0;
          font-family: Arial;
          background: linear-gradient(135deg, #eef2ff, #f8fafc);
        }

        /* LAYOUT */
        .layout {
          display: flex;
          min-height: 100vh;
        }

        /* SIDEBAR */
        .sidebar {
          width: 260px;
          background: linear-gradient(180deg, #4f46e5, #06b6d4, #10b981);
          padding: 20px;
          color: white;
          position: fixed;
          height: 100%;
        }

        .logo {
          font-size: 22px;
          font-weight: 800;
          margin-bottom: 30px;
        }

        .job-card {
          background: rgba(255,255,255,0.15);
          padding: 12px;
          border-radius: 12px;
          margin-bottom: 10px;
          cursor: pointer;
          transition: 0.3s;
          backdrop-filter: blur(10px);
        }

        .job-card:hover {
          transform: translateX(5px);
          background: rgba(255,255,255,0.25);
        }

        .job-active {
          background: white;
          color: #4f46e5;
        }

        /* MAIN */
        .main {
          margin-left: 260px;
          padding: 25px;
          width: 100%;
        }

        /* HEADER */
        .page-header h1 {
          font-size: 28px;
          font-weight: 800;
          background: linear-gradient(90deg, #6366f1, #06b6d4, #10b981);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .page-header p {
          color: #6b7280;
        }

        /* CARD */
        .card {
          background: white;
          padding: 18px;
          border-radius: 16px;
          box-shadow: 0 12px 30px rgba(0,0,0,0.08);
          margin-bottom: 12px;
          transition: 0.3s;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 18px 40px rgba(99,102,241,0.15);
        }

        /* AVATAR */
        .avatar {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6366f1, #06b6d4);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
        }

        /* COVER LETTER */
        .cover {
          background: linear-gradient(90deg, #f1f5f9, #e0f2fe);
          border-left: 4px solid #6366f1;
          padding: 10px 14px;
          border-radius: 10px;
          font-style: italic;
          color: #475569;
        }

        /* BUTTONS */
        .btn {
          padding: 6px 10px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          font-weight: bold;
          transition: 0.2s;
        }

        .btn-sm {
          font-size: 12px;
        }

        .btn-outline {
          background: white;
          border: 1px solid #d1d5db;
        }

        .btn-danger {
          background: linear-gradient(90deg, #ef4444, #f97316);
          color: white;
        }

        .btn-success {
          background: linear-gradient(90deg, #10b981, #22c55e);
          color: white;
        }

        .btn-secondary {
          background: linear-gradient(90deg, #6366f1, #06b6d4);
          color: white;
        }

        /* STATUS AREA */
        .status-box {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }

        /* EMPTY */
        .empty {
          text-align: center;
          padding: 50px;
          background: white;
          border-radius: 16px;
        }

        /* LOADING */
        .loading {
          text-align: center;
          padding: 20px;
          color: #4f46e5;
          font-weight: bold;
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .layout {
            flex-direction: column;
          }

          .sidebar {
            position: relative;
            width: 100%;
            height: auto;
          }

          .main {
            margin-left: 0;
          }
        }
      `}),a.jsxs("div",{className:"sidebar",children:[a.jsx("div",{className:"logo",children:"🚀 ATS Dashboard"}),a.jsxs("div",{children:[a.jsx("h4",{style:{marginBottom:10},children:"Your Jobs"}),o==null?void 0:o.map(e=>a.jsxs("div",{className:`job-card ${(t==null?void 0:t.id)===e.id?"job-active":""}`,onClick:()=>r(e),children:[a.jsx("div",{style:{fontWeight:700},children:e.title}),a.jsxs("div",{style:{fontSize:12,opacity:.9},children:["📍 ",e.location]})]},e.id))]})]}),a.jsxs("div",{className:"main",children:[a.jsxs("div",{className:"page-header",children:[a.jsx("h1",{children:"Applicant Tracker"}),a.jsx("p",{children:"Manage and filter job applicants easily"})]}),!t&&a.jsx("div",{className:"empty",children:"👈 Select a job to view applicants"}),t&&a.jsxs(a.Fragment,{children:[a.jsxs("h3",{style:{marginBottom:15},children:[t.title," Applicants"]}),x&&a.jsx("div",{className:"loading",children:"Loading..."}),s==null?void 0:s.map(e=>{var n;return a.jsxs("div",{className:"card",children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[a.jsxs("div",{style:{display:"flex",gap:10},children:[a.jsx("div",{className:"avatar",children:(n=e.applicantName)==null?void 0:n[0]}),a.jsxs("div",{children:[a.jsx("div",{style:{fontWeight:700},children:e.applicantName}),a.jsx("div",{style:{fontSize:12,color:"#6b7280"},children:e.applicantEmail})]})]}),a.jsx(u,{status:e.status})]}),e.coverLetter&&a.jsxs("div",{className:"cover",style:{marginTop:10},children:['"',e.coverLetter,'"']}),a.jsx("div",{className:"status-box",style:{marginTop:12},children:j.filter(i=>i!==e.status).map(i=>a.jsx("button",{className:`btn btn-sm ${i==="REJECTED"?"btn-danger":i==="HIRED"?"btn-success":i==="SHORTLISTED"?"btn-secondary":"btn-outline"}`,onClick:()=>c(e.id,i),children:i},i))})]},e.id)})]})]})]})}export{T as default};
