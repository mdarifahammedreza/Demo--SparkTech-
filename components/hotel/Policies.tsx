import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Policies() {
  const policies = [
    {
      title: "Check-in",
      detail: (
        <>
          Available 24 hours. <br />
          You&apos;ll need to let the property know in advance what time
          you&apos;ll arrive.
        </>
      ),
    },
    {
      title: "Check-out",
      detail: "Available 24 hours",
    },
    {
      title: "Cancellation/prepayment",
      detail:
        "Cancellation and prepayment policies vary according to accommodation type.",
    },
    {
      title: "Children and beds",
      detail:
        "Children 12 years and above will be charged as adults at this property.",
    },
    {
      title: "No age restriction",
      detail: "There is no age requirement for check-in.",
    },
    {
      title: "Pets",
      detail: "Pets are not allowed.",
    },
    {
      title: "Cash only",
      detail: "This property only accepts cash payments.",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Policies</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left border border-gray-200 rounded-md overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 font-semibold text-gray-700 w-1/4">
                  Policy
                </th>
                <th className="px-4 py-2 font-semibold text-gray-700">
                  Details
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {policies.map((policy, index) => (
                <tr key={index} className="bg-white">
                  <td className="px-4 py-3 font-medium text-gray-900">
                    {policy.title}
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    {typeof policy.detail === "string" ? (
                      <p>{policy.detail}</p>
                    ) : (
                      policy.detail
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
