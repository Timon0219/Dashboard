import { useState } from "react";
import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
const Integrations = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const handleTabSelect = (index) => {
    setSelectedTabIndex(index);
  };
  return (
    <main>
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
        <Tabs
          selectedIndex={selectedTabIndex}
          onSelect={handleTabSelect}
          className="bg-white dark:bg-slate-800"
        >
          <TabList className="flex">
            <CustomTab
              className={`bg-slate-700 ${selectedTabIndex === 0 && " bg-white text-black"}`}
            >
              Shopify
            </CustomTab>
            <CustomTab
              className={`bg-slate-700 ${selectedTabIndex === 1 && " bg-white text-black"}`}
            >
              Facebook Ads
            </CustomTab>
            <CustomTab
              className={`bg-slate-700 ${selectedTabIndex === 2 && " bg-white text-black"}`}
            >
              Google Ads
            </CustomTab>
          </TabList>

          <CustomTabPanel>
            <form className="w-fit mx-auto py-16">
              <CustomInput>
                <label>API</label>
                <input placeholder="Enter the API" />
              </CustomInput>
              <CustomInput>
                <label>API Key</label>
                <input placeholder="Enter the API key" />
              </CustomInput>
              <CustomInput>
                <label>Token</label>
                <input placeholder="Enter the Token" />
              </CustomInput>
              <CustomInput>
                <label>Secret key</label>
                <input placeholder="Enter the Secret key" />
              </CustomInput>
              <button
                type="submit"
                className="btn bg-indigo-500 hover:bg-indigo-600 text-white mt-4 w-full"
              >
                <span className="hidden xs:block ml-2">Save</span>
              </button>
            </form>
          </CustomTabPanel>
          <CustomTabPanel>
            <form className="w-fit mx-auto py-16">
              <CustomInput>
                <label>API</label>
                <input placeholder="Enter the API" />
              </CustomInput>
              <CustomInput>
                <label>API Key</label>
                <input placeholder="Enter the API key" />
              </CustomInput>
              <CustomInput>
                <label>Token</label>
                <input placeholder="Enter the Token" />
              </CustomInput>
              <button
                type="submit"
                className="btn bg-indigo-500 hover:bg-indigo-600 text-white mt-4 w-full"
              >
                <span className="hidden xs:block ml-2">Save</span>
              </button>
            </form>
          </CustomTabPanel>
          <CustomTabPanel>
            <form className="w-fit mx-auto py-16">
              <CustomInput>
                <label>API</label>
                <input placeholder="Enter the API" />
              </CustomInput>
              <CustomInput>
                <label>API Key</label>
                <input placeholder="Enter the API key" />
              </CustomInput>
              <CustomInput>
                <label>Token</label>
                <input placeholder="Enter the Token" />
              </CustomInput>
              <CustomInput>
                <label>Secret key</label>
                <input placeholder="Enter the Secret key" />
              </CustomInput>
              <button
                type="submit"
                className="btn bg-indigo-500 hover:bg-indigo-600 text-white mt-4 w-full"
              >
                <span className="hidden xs:block ml-2">Save</span>
              </button>
            </form>
          </CustomTabPanel>
        </Tabs>
      </div>
    </main>
  );
};

export default Integrations;

const CustomTab = styled(Tab)`
  padding: 10px 12px;
  cursor: pointer;
`;

const CustomTabPanel = styled(TabPanel)`
  width: 100%;
`;

const CustomInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
  label {
    display: flex;
    margin-right: 10px;
    text-align: center;
  }
  input {
    background: transparent;
    border-top: none;
    border-left: none;
    border-right: none;
  }
`;
