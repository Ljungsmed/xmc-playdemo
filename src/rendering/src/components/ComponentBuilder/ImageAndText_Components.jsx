import * as FEAAS from '@sitecore-feaas/clientside/react';

// Component: ImageAndText
// Version:   Name
// URL:       https://components.sitecorecloud.io/components/xB38WD0LUn
const MyComponent = ({data}) =>
  <><FEAAS.Component
        library="49D9qdIFIvLBgtY2v3brRj"
        component="xB38WD0LUn"
        version="lUNNQNC326"
        revision="published"
        hostname="https://feaascompontsapiprod.blob.core.windows.net"
        data={data} />
        // Use it in your app:
        <FEAAS.Stylesheet
            library="49D9qdIFIvLBgtY2v3brRj"
            hostname="https://feaascompontsapiprod.blob.core.windows.net" /><MyComponent data={{ "SiCFDd1xtF": { "data": { "item": { "id": "B8BA3EB1DAC946D18A34EC056E1ED26E", "name": "TextContent1", "fields": [{ "name": "Text", "jsonValue": { "value": "Here is some text from this item" } }] } } } }} /></>