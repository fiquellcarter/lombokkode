import * as React from "react";

type GAProps = {
  gaId: string;
  dataLayerName?: string;
};

export function GoogleAnalytics({ gaId, dataLayerName = "dataLayer" }: GAProps) {
  return (
    <React.Fragment>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window["${dataLayerName}"] = window["${dataLayerName}"] || [];

          function gtag() {
            window["${dataLayerName}"].push(arguments);
          }

          gtag("js", new Date());

          gtag("config", "${gaId}", {
            send_page_view: false,
          });`,
        }}
      />
    </React.Fragment>
  );
}
