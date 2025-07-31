
"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function UrlAnalyzer() {
  const [url, setUrl] = useState('')
  const [results, setResults] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const handleAnalysis = async () => {
    if (!url.trim()) return
    
    setLoading(true)
    try {
      // Simulate API call for now
      await new Promise(resolve => setTimeout(resolve, 1200))
      
      const mockResults = {
        url: url,
        title: "Sample Page Title - SEO Optimized",
        metaDescription: "This is a sample meta description that would be extracted from the analyzed URL.",
        wordCount: Math.floor(Math.random() * 2000) + 500,
        headings: {
          h1: Math.floor(Math.random() * 3) + 1,
          h2: Math.floor(Math.random() * 8) + 2,
          h3: Math.floor(Math.random() * 15) + 5
        },
        extractedKeywords: [
          {
            keyword: 'digital marketing',
            frequency: Math.floor(Math.random() * 20) + 5,
            density: (Math.random() * 3).toFixed(2),
            difficulty: Math.floor(Math.random() * 100),
            searchVolume: Math.floor(Math.random() * 10000) + 1000
          },
          {
            keyword: 'seo optimization',
            frequency: Math.floor(Math.random() * 15) + 3,
            density: (Math.random() * 2.5).toFixed(2),
            difficulty: Math.floor(Math.random() * 100),
            searchVolume: Math.floor(Math.random() * 8000) + 500
          },
          {
            keyword: 'content strategy',
            frequency: Math.floor(Math.random() * 12) + 2,
            density: (Math.random() * 2).toFixed(2),
            difficulty: Math.floor(Math.random() * 100),
            searchVolume: Math.floor(Math.random() * 6000) + 300
          }
        ],
        images: Math.floor(Math.random() * 20) + 3,
        links: {
          internal: Math.floor(Math.random() * 30) + 5,
          external: Math.floor(Math.random() * 15) + 2
        }
      }
      
      setResults(mockResults)
    } catch (error) {
      console.error('Error analyzing URL:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>URL Analyzer</CardTitle>
          <CardDescription>
            Enter a URL to extract keywords and analyze SEO content
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Input
              placeholder="Enter URL (e.g., https://example.com/page)"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAnalysis()}
              className="flex-1"
            />
            <Button onClick={handleAnalysis} disabled={loading}>
              {loading ? 'Analyzing...' : 'Analyze URL'}
            </Button>
          </div>
        </CardContent>
      </Card>

      {results && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Page Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-blue-600">{results.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{results.metaDescription}</p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{results.wordCount}</div>
                    <div className="text-sm text-muted-foreground">Words</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{results.images}</div>
                    <div className="text-sm text-muted-foreground">Images</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{results.links.internal}</div>
                    <div className="text-sm text-muted-foreground">Internal Links</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">{results.links.external}</div>
                    <div className="text-sm text-muted-foreground">External Links</div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-2">Heading Structure</h4>
                  <div className="flex gap-4 text-sm">
                    <span>H1: {results.headings.h1}</span>
                    <span>H2: {results.headings.h2}</span>
                    <span>H3: {results.headings.h3}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Extracted Keywords</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {results.extractedKeywords.map((keyword: any, index: number) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg">{keyword.keyword}</h3>
                      <Badge variant="outline">{keyword.frequency} occurrences</Badge>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Density:</span>
                        <div className="font-medium">{keyword.density}%</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Difficulty:</span>
                        <div className="font-medium">{keyword.difficulty}/100</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Search Volume:</span>
                        <div className="font-medium">{keyword.searchVolume.toLocaleString()}/month</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Competition:</span>
                        <div className="font-medium">
                          {keyword.difficulty < 30 ? 'Low' : keyword.difficulty < 70 ? 'Medium' : 'High'}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
