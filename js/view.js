const view = {};

view.get = async (file, callback, _fetch, ext = false) => {

    const http = _fetch ?? fetch;
    const base = _fetch ?? "https://jmfcool.com/";

    try 
    {
        const response = await http(base + file, {
            json: true,
            mode: "cors",
            headers: {
                "Origin": "*",
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) 
        {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }

        const data = await response.json();

        return callback(data);
    } 
    catch (error) 
    {
        console.log(error);
    }

};

export { view };
