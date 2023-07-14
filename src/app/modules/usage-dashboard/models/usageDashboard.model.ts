export interface AuthorsModel  {
    data: Array<{ load: number;
        title: string;
        description: string 
    }>;
    total: number;
}

export interface PostDistributionModel { 
    postsNumber: number;
    group: string
}

export interface PostDistributionBySchoolModel { 
    postsNumber: number;
    schoolName: string;
}

export interface ChartJsDatadModel { 
    labels: string[];
    datasets?: Object;
}
