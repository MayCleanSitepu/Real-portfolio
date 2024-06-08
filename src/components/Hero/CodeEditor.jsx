import React from 'react';

function CodeEditor() {
  const code = `
{
    "my data ? ": {
        "id": 00,
        "first_name": "May ",
        "middle_name": "Clean ",
        "last_name": "Sitepu",
        "email": "maycleansitepu0204@mail.ugm.ac.id",
        "avatar": "https://here.is/my/picture/img.jpg"
    },
    "Message": {
        "For_you": "https://reqres.in/#support-heading",
        "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
    }
}`;

return (
  <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-56 rounded-lg border-2 border-slate-50 p-4">
    <pre className="text-gray-300 font-mono break-all sm:text-sm md:text-base lg:text-lg xl:text-xl whitespace-normal">
      {code}
    </pre>
  </div>
);
}

export default CodeEditor;