
import { KeywordResearch } from '@/components/keyword-research'
import { CompetitorAnalysis } from '@/components/competitor-analysis'
import { UrlAnalyzer } from '@/components/url-analyzer'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function Home() {
  return (
    <div className="container mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          SEO Research Pro
        </h1>
        <p className="text-lg text-gray-600">
          Professional keyword research and competitor analysis tool
        </p>
      </div>

      <Tabs defaultValue="keyword-research" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="keyword-research">Keyword Research</TabsTrigger>
          <TabsTrigger value="competitor-analysis">Competitor Analysis</TabsTrigger>
          <TabsTrigger value="url-analyzer">URL Analyzer</TabsTrigger>
        </TabsList>
        
        <TabsContent value="keyword-research" className="mt-6">
          <KeywordResearch />
        </TabsContent>
        
        <TabsContent value="competitor-analysis" className="mt-6">
          <CompetitorAnalysis />
        </TabsContent>
        
        <TabsContent value="url-analyzer" className="mt-6">
          <UrlAnalyzer />
        </TabsContent>
      </Tabs>
    </div>
  )
}
