const caseStudySchema = {
    company: 'MyShapeTime',
    meta_title: 'Sleepsia - Data Conversion from Wave to QuickBooks Online',
    meta_description: "Set up and configured QuickBooks Desktop Enterprise for MyShapeTime, a Global Ecommerce Company.", 
    appFrom: 'Wave Accounting',
    appTo: 'QuickBooks Online',
    slices: [
        {
            overview: "Sleepsia, a global ecommerce company, outgrew its startup phase and wanted to move to QuickBooks Online with historical data.",
            industry: "Ecommerce",
            time_period: 5, // in years
            turnaround_time: 2 // in weeks
        },
        {
            steps: {
                cleanup: [
                    "Reconciled transactions.",
                    "Removed duplicate entries.", 
                    "Addressed missing entries.", 
                    "Organized chart of accounts."
                ],
                extract: [
                    "Converted Excel data to CSV Format",
                    "Formatted data as per the schema of QuickBooks Online.", 
                    "Mapped accounts and items to group transactions.", 
                ],
                upload: [
                    "Prepared payload to import data via QBO API.",
                    "Created Python scripts to programmatically upload data.",
                    "Organized chart of accounts."
                ],
                validate: [
                    "Matched account balances in QuickBooks with the previous accounting system.",
                    "Addressed any missing or duplicate transactions that came up during the migration process.", 
                    "Verified outstanding balances for the customers and vendors using key reports.", 
                ],
            }
        },
        {
            testimonial: {
                review: "We kind of had to switch quickly to QuickBooks. And we needed our past transactions before we went live with it.",
                brand_rep: "Vaibhav Jassal",
                brand_rep_designation: "Senior Accountant"
            }
        },
        {
            cta: {
                heading: 'Move to QuickBooks Online',
                subheading: "Our experts have done it before. They'll ensure a smooth migration process for your business.",
                button_label: "Book a Free Consultation."
            }
        }
    ]
}